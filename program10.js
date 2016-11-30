var port = process.argv[2];
var net = require('net');
var strftime = require('strftime');

function listener(socket) {
    socket.end(strftime('%F %R')+'\n');
};

var server = net.createServer(listener);
server.listen(port);
