module.exports = function (dirname, ext, callback) {

	var fs = require('fs');
	var path = require('path');
	var filteredList = [];
	var extension = '.'+ext;

	fs.readdir(dirname, function doneReading(err, list) {
		if (err) { return callback(err); };
		for (var i = 0; i < list.length; i++) {
			if (path.extname(list[i]) == extension) {
				filteredList.push(list[i]);
			};
		};
		callback(null, filteredList);
	});

};
