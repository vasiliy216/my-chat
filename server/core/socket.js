const socket = require("socket.io")

module.exports = (http) => {
    
    const io = socket(http);

    io.on("connect", function(socket) {
        
    });
    
    return io;
}