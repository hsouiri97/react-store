const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "",
    pass: ""
  }
});

exports.contactMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const f_name = req.query.f_name;
    const l_name = req.query.l_name;
    const email = req.query.email;
    const subject = req.query.subject;
    const message = req.query.message;

    const mailOptions = {
      from: email, // Something like: Jane Doe <janedoe@gmail.com>
      to: "monsmartphone7@gmail.com",
      subject: "Contact: " + email, // email subject
      html:
        `<h3>Prénom: ` +
        f_name +
        `</h3>` +
        `<br /><h3>Nom: ` +
        l_name +
        `</h3>` +
        `<br /><h3>Email: ` +
        email +
        `</h3>` +
        `<br /><h3>Sujet: ` +
        subject +
        `</h3>` +
        `<br /><h3>Message: ` +
        message +
        `</h3>` // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      } else {
        return res.send(
          "Votre message a été envoyé avec succès vous pouvez fermer cette fenêtre :)"
        );
      }
    });
  });
});
