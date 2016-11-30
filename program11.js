var port = process.argv[2];
var file = process.argv[3];
var fs = require('fs');
var http = require('http');
var text = fs.createReadStream(file);

var server = http.createServer(function callback(request, response) {
    text.pipe(response);
});
server.listen(port);
