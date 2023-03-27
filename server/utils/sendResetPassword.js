const sendEmail = require("./sendEmail");

const sendResetPassword = async ({
  name,
  email,
  token,
  origin,
}) => {

  const resetUrl = `${origin}/user/reset-password?token=${token}&email=${email}`;
  const message = `
    <p>Please confirm your email by clicking on the following link : 
    <a href="${resetUrl}">Reset password</a> </p>
  `;

  return sendEmail({
    to: email,
    subject: "Reset password",
    html: `<h4> Hello, ${name}</h4>
    ${message}
    `,
  });
};

module.exports = sendResetPassword;
