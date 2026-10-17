const fs = require('node:fs');

const readStream = fs.createReadStream('source.txt', 'utf8');
const writeStream = fs.createWriteStream('destination.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File copy complete via streams!');
});

readStream.on('error', (err) => {
  console.error('Read Error:', err.message);
});