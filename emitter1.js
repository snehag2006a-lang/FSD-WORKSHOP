const { EventEmitter } = require('node:events');
const fs = require('node:fs/promises');


const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}! Event received.`);
});

myEmitter.emit('greet', 'Developer');


async function runAsyncExample() {
  try {
    console.log('Reading file asynchronously...');
    
    await fs.writeFile('sample.txt', 'Node.js Streams and Async Control!');
    const content = await fs.readFile('sample.txt', 'utf8');
    console.log('File Content:', content);
  } catch (error) {
    console.error('Error handling file:', error.message);
  }
}

runAsyncExample();