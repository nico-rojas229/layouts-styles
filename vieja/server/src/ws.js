const io = require('socket.io');


const wsConnection = io.on("connection", (socket) => {
    console.log(socket);
});

module.exports = wsConnection;

