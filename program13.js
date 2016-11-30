var http = require('http');
var url = require('url');

var server = http.createServer(function callback(req, res) {
    if (req.method !== 'GET') {
        return res.end('send me a GET\n')
    }
    
    var parsed = url.parse(req.url, true);
    var isotime = parsed.query.iso;
    var datetime = new Date(isotime);
    var text = JSON.stringify({});
    if (parsed.pathname == '/api/parsetime') { 
        text = JSON.stringify({'hour' : datetime.getHours(), 'minute': datetime.getMinutes(), 'second': datetime.getSeconds()});
    }
    else if (parsed.pathname == '/api/unixtime') {
        text = JSON.stringify({'unixtime': datetime.getTime()})
    }
    else {
        return res.end('wrong path\n')
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(text);

});
server.listen(process.argv[2]);
