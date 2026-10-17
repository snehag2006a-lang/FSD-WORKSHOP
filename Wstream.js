const fs = require('node:fs');
const output = fs.createWriteStream('summary.txt');
output.write('log analysis\n');
output.write('errors:12\n');
output.end('warnings:30\n');
output.on('finish',()=>{
    console.log('output file complete');
});