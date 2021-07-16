const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return;
    }

    // in case you get CORS errors you need these 2 lines of code
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Credentials", "true");

    const mailOptions = {
      from: req.body.email,
      replyTo: req.body.email,
      to: gmailEmail,
      subject: `Contact form from ${req.body.name}`,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`
    };

    mailTransport.sendMail(mailOptions);

    res.status(200).end();
    // or you can pass data to indicate success.
    // res.status(200).send({isEmailSend: true});
  });
});
