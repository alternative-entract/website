const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken');
const crypto = require('crypto')

const User = require('../models/User')
const Token = require("../models/Token");
const CustomError = require('../errors')
const {
  createTokenUser,
  attachCookiesToResponse,
  sendVerificationEmail,
  sendResetPassword,
  createHash
} = require("../utils");

const register = async (req, res) => {
  const { email, name, password } = req.body
  
    const emailExist = await User.findOne({ email })
    if (emailExist) {
        throw new CustomError.BadRequestError('Email already exist')
    }
    // first registered user is an admin
    const isFirstAcount = await User.countDocuments({}) === 0
    const role = isFirstAcount ? 'admin' : 'user'
    
    const verificationToken = crypto.randomBytes(40).toString('hex')
    const user = await User.create({
      name,
      email,
      password,
      role,
      verificationToken,
    });
  const origin = 'http://localhost:3000';

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });
  //send verification tokenback only white testing in postman
  res.status(StatusCodes.CREATED).json({
    msg: "Success! Please check our email to verifie account",
  });
};

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError.UnauthenticatedError("Verification failed user");
  }

  if (user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError("Verification Failed token");
  }

  user.isVerified = true;
  user.verified = Date.now();
  user.verificationToken = "";

  await user.save();
  res.status(StatusCodes.OK).json({ msg: "Email verified" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials user");
  }

  const isPasswordCorrect = user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials password");
  }
  if (!user.isVerified) {
    throw new CustomError.UnauthenticatedError("Please verify your email");
  }
  const tokenUser = createTokenUser(user);

  // create refresh token
  let refreshToken = "";
  // check for existing token
  const existingToken = await Token.findOne({ user: user._id });

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: tokenUser, refreshToken });
    res.status(StatusCodes.OK).json({ user: tokenUser });
    return;
  }

  refreshToken = crypto.randomBytes(40).toString("hex");
  const userAgent = req.headers["user-agent"];
  const ip = req.ip;
  const userToken = { refreshToken, ip, userAgent, user: user._id };

  await Token.create(userToken);

  attachCookiesToResponse({ res, user: tokenUser, refreshToken });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId })

  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.cookie('refreshToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json({ msg: 'user logged out!!!' })
}

const forgotPassword = async (req, res) => {
  const { email } = req.body
  if (!email) {
    throw new CustomError.BadRequestError('Please provide valid email')
  }
  const user = await User.findOne({ email })
  if (user) {
    const passwordToken = crypto.randomBytes(40).toString('hex')
    // send email
    const origin = 'http://localhost:3000'
    sendResetPassword({
      name: user.name,
      email: user.email,
      token: passwordToken,
      origin,
    })
    const tenMinutes = 1000 * 60 * 10
    const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes)
    user.passwordToken = createHash(passwordToken)
    user.passwordTokenExpirationDate = passwordTokenExpirationDate
    await user.save()
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: `Please check our email for reset your password link` })
}
const resetPassword = async (req, res) => {
  const { token, email, password } = req.body
  if (!token || !email || !password) {
    throw new CustomError.BadRequestError('please provide all values')
  }
  const user = await User.findOne({ email })
  if (user) {
    const currentDate = new Date(Date.now())
    if (
      user.passwordToken === createHash(token) &&
      user.passwordTokenExpirationDate > currentDate
    ) {
      user.password = password
      user.passwordToken = null
      user.passwordTokenExpirationDate = null
      await user.save()
    }
  }
}

module.exports = {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
}
