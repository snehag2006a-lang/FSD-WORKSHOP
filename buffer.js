const buf = Buffer.from('Hello Node.js');
console.log(buf);
console.log(buf.length);
console.log(buf.toString('utf8'));
const bytes = Buffer.from([72,105]);
console.log(bytes.toString());
