const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport')
require('dotenv').config()
const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    },
    host: 'api.mailgun.net'
}
console.log(auth)
const transporter = nodemailer.createTransport(mailGun(auth));

function sendMail(email, subject, message, cb) {
    const mailOptions = {
        from: email,
        to: 'ryanjepson.webdev@gmail.com',
        subject: subject,
        text: message
    }
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        } else cb(null, data);
    });
}

module.exports= sendMail;