const {StatusCodes} = require('http-status-codes')
const User = require('../models/User')
const CustomError = require('../errors')
const jwt = require('jsonwebtoken');
const { createTokenUser, attachCookiesToResponse } = require("../utils");


const register = async (req, res) => {
    const { email, name, password } = req.body
    const emailExist = await User.findOne({ email })
    if (emailExist) {
        throw new CustomError.BadRequestError('Email already exist')
    }
    // first registered user is an admin
    const isFirstAcount = await User.countDocuments({}) === 0
    const role = isFirstAcount ? 'admin' : 'user'
  
    const user = await User.create({ email, name, password, role });
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({ res, user: tokenUser });
    res.status(StatusCodes.CREATED).json({ user:tokenUser});
};


const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
   res.status(StatusCodes.OK).json({ user: tokenUser });
};
const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now())
  });
  res.status(StatusCodes.OK).json({msg:'user logged out'})
};

module.exports = {
  register,
  login,
  logout,
};
