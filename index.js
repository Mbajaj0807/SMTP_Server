const { SMTPServer } = require("smtp-server");

const server = new SMTPServer({
    disabledCommands: ['AUTH', 'STARTTLS'],
    authOptional: true,
    onConnect: (session, callback) => {
        console.log("Client connected:", session.id);
        callback(); // Accept all connections
    },
    onMailFrom: (address, session, callback) => {
        console.log("Mail from:", address.address, session.id);
        callback();
    },
    onRcptTo: (address, session, callback) => {
        console.log("Recipient to:", address.address, session.id);
        callback();
    },
    onData: (stream, session, callback) => {
        stream.on('data', (chunk) => {
            console.log(`onData: ${chunk.toString()}`);
        });
        stream.on('end', () => {
            console.log('onData end');
            callback(null, 'Message accepted');
        });
    }
});

server.listen(2525, () => {
    console.log("SMTP server is running on port 2525");
});
