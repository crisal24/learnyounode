var mymodule = require('./program6module');
var extension = process.argv[3];
var dirname = process.argv[2];

function myfunction (err, list) {
	if (err) { console.log(err); }
	for (var i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
};

mymodule(dirname , extension, myfunction);
