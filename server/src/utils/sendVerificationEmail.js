const sendEmail = require('./sendEmail')

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`

  const message = `<p>Merci de confirmer votre adresse mail en cliquant sur ce 
  <a href="${verifyEmail}">lien</a> </p>`

  return sendEmail({
    to: email,
    subject: 'Vérification de votre adresse mail',
    html: `<h4> Bonjour, ${name}</h4>
    ${message}
    `,
  })
}

module.exports = sendVerificationEmail
