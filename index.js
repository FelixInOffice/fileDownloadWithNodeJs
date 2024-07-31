let fs = require('fs'),
    request = require('request');

let download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

const konaColor = [
    'PM2',
    'SAW',
    'C5G',
    'PE2',
    'YYY',
    'RRR',
    'R2P',
    'A2B'
]

konaColor.forEach(color => {
    const dir = `Kona_${color}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    for (let i = 1; i <= 61; i++) {
        // if (i < 10) 001, 002, 003, 004, 005, 006, 007, 008, 009
        const newNum = i < 10 ? `00${i}` : `0${i}`;
        download(`https://www.hyundai.com/contents/vr360/SX11/exterior/${color}/${newNum}.png`, `${dir}/Kona_${color}_${i}.jpg`, function () {
            console.log('done');
        });
    }
});