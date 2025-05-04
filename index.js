const { SMTPServer } = require("smtp-server");

const server = new SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    onConnect: (session, callback) => {
        console.log("Client connected:", session.id);
        // Check if the client is allowed to connect
        callback();
    },
    onMailFrom: (address, session, callback) => {
        console.log("Mail from:", address.address, session.id);
        // Check if the sender is allowed to send emails
        callback();
    },
    onRcptTo: (address, session, callback) => {
        console.log("Recipient to:", address.address, session.id);
        // Check if the recipient is allowed to receive emails
        callback();
    },
    onData: (stream, session, callback) => {
        stream.on('data', (data) => {
            console.log(`onData: ${data.toString()}`);
        });
        stream.on('end', () => {
            console.log('onData end');
            callback(null, 'Message accepted');
        });
    }
});

server.listen(25, () => console.log("SMTP server is running on port 25"));
