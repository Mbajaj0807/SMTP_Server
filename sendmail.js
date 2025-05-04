const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'mail.losthub.xyz', 
  port: 25,                     
  secure: false,              
  auth: {
    user: '', 
    pass: ''
  },
  tls: {
    rejectUnauthorized: false 
  }
});

const mailOptions = {
  from: '"Manan Bajaj" <manan@losthub.xyz>', // Must match your domain
  to: 'mananbajaj0807@gmail.com',
  subject: 'Hello from EC2 SMTP Server',
  text: 'This is a test message sent from my custom SMTP server.',
  html: '<p>This is a <b>test email</b> sent from my EC2 SMTP server.</p>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error sending mail:', error);
  }
  console.log(' Message sent successfully:', info.response);
});
