var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var http = require('http');
var bl = require('bl');
var count = 0;
var s1 = '';
var s2 = '';
var s3 = '';

function results(number, data) {
    if (number == 1) {
        s1 = data;
        count += 1;
    };
    if (number == 2) {
        s2 = data;
        count += 1;
    };
    if (number == 3) {
        s3 = data;
        count += 1;
    };
    if (count == 3) {
        console.log(s1);
        console.log(s2);
        console.log(s3);
    };
};

http.get(url1, function callback(response) {
    response.pipe(bl(function(err, data) {
            if (err) {
                return console.log(err);
            };
            results(1, data.toString());
    }));
});

http.get(url2, function callback(response) {
    response.pipe(bl(function(err, data) {
            if (err) {
                return console.log(err);
            };
            results(2, data.toString());
    }));
});

http.get(url3, function callback(response) {
    response.pipe(bl(function(err, data) {
            if (err) {
                return console.log(err);
            };
            results(3, data.toString());
    }));
});

