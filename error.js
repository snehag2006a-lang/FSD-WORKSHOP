const fs = require('node:fs');


const reader = fs.createReadStream('input.txt');
const writer = fs.createWriteStream('output.txt');


let totalBytesRead = 0;

reader.on('data', chunk => {
  totalBytesRead += chunk.length; 
  console.log(`Read ${chunk.length} bytes. Total: ${totalBytesRead}`);

 
  const canContinue = writer.write(chunk);
  if (!canContinue) {
    console.log('Buffer full! Pausing reader stream...');
    reader.pause();
  }
});

writer.on('drain', () => {
  console.log('Writer queue drained. Resuming reader...');
  reader.resume();
});

reader.on('end', () => {
  console.log('Finished reading file.');
  writer.end(); 
});


reader.on('error', err => console.error('Reader Error:', err.message));
writer.on('error', err => console.error('Writer Error:', err.message));