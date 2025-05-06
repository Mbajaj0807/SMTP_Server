const nodemailer = require('nodemailer');
//Update
const transporter = nodemailer.createTransport({
  host: '54.227.121.116',
  port: 2525,
  secure: false,
  tls: {
    rejectUnauthorized: false
  }
});

transporter.sendMail({
  from: 'manan.losthub.xyz',
  to: 'mananbajaj0807@gmail.com',
  subject: 'SMTP Test',
  text: 'This is a test email from local SMTP server'
}, (err, info) => {
  if (err) {
    console.error('Error sending mail:', err);
  } else {
    console.log('Mail sent:', info);
  }
});
