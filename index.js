let fs = require('fs'),
    request = require('request');

let download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

for (let i = 1; i <= 36; i++) {
    download(`https://dmassets.hyundai.com/is/image/hyundaiautoever/HME_NE_N_360_EXT_SFB-Performance+Blue_52910NI000_00${i}?wid=1600&hei=900&fmt=png-alpha&fit=wrap,1`, `EXT_SFB-Performance+Blue/EXT_SFB-Performance+Blue_${i}.jpg`, function () {
        console.log('done');
    });
}