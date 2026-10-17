const fs = require('node:fs');

const input = fs.createReadStream('app.log', {
    encoding: 'utf8',
    highWaterMark: 64 * 1024
});

input.on('data', chunk => {
    console.log('chunk size:', chunk.length);
});

input.on('end', () => console.log('finished'));