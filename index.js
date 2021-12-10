let fs = require('fs'),
    request = require('request');

let download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

for (let i = 1; i <= 17; i++) {
    download(`https://Your_URL_Here_${i}.jpg`, `filesDownloaded/${i}.jpg`, function () {
        console.log('done');
    });
}