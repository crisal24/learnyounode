var fs = require('fs');
var lines = undefined;
function countLines(callback) {
	fs.readFile(process.argv[2], function done(err, fileContents) {
		lines = fileContents.toString().split('\n').length - 1;
		callback();
	});
};

function showNumber() {
	console.log(lines);
};

countLines(showNumber);

/* 

Solution without callback function:

    var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

*/
