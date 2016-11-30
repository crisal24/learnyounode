var url = process.argv[2];
var http = require('http');

http.get(url, function callback(response) {
	response.on('error', function (e) {
		console.log('Error message: '+e.message);
	});
	response.setEncoding('utf8');
	response.on('data', function (data) {
    		console.log(data);
    });
});
