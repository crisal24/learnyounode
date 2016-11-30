var fs = require('fs');
var path = process.argv[2];
var extension = '.'+process.argv[3];

fs.readdir(path, function callback (err, list) {
	if (err) {
		return console.log(err);
	};
	var path = require('path');
	for (var i = 0; i < list.length; i++) {
		if (path.extname(list[i]) == extension) {
			console.log(list[i]);
		};
	};

});
