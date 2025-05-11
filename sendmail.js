const nodemailer = require('nodemailer');
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for the 'to' email address
rl.question('Please enter the recipient email address: ', (toEmail) => {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: '54.227.121.116',
    port: 2525,
    secure: false,
    tls: {
      rejectUnauthorized: false
    }
  });

  // Send email
  transporter.sendMail({
    from: 'manan@losthub.xyz',
    to: toEmail,
    subject: 'SMTP Test',
    text: 'This is a test email from local SMTP server'
  }, (err, info) => {
    if (err) {
      console.error('Error sending mail:', err);
    } else {
      console.log('Mail sent:', info);
    }
    rl.close(); // Close the readline interface
  });
});
