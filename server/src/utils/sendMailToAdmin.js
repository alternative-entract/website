const sendEmail = require("./sendEmail");

const sendMailToAdmin = async () => {
const message = `<p>Un nouveau adhérant vient de s'inscrire, merci de se connecter sur votre administrateur pour gérer la demande.<br> Bonne journée, Cordialement,  </p>`;
await sendEmail({
    to: "tech.alternativeentract@gmail.com",
    subject: "Vous avez un nouveau adhérant en attente de confirmation",
    html: `<h4> Bonjour ,</h4>
    ${message}
    `,
  });
};

module.exports = sendMailToAdmin;
