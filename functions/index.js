const functions = require('firebase-functions');
require('dotenv').config();
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

exports.emailMessage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return;
    }

    const { firstName, lastName, email, message } = req.body;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: 'info@johnnyk.dev',
      to: 'info@johnnyk.dev',
      subject: 'Contact form request',
      html: `<p> From: ${firstName} ${lastName} <br/>Email: ${email} <br/>Message: ${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('error!', error);
        res.json({
          msg: 'fail',
        });
      } else {
        console.log('SENT');
        res.json({
          msg: 'success',
        });
      }
    });
  });
});
