const { EventEmitter } = require('node:events');
const bus = new EventEmitter();

bus.on('report', data => {
  console.log('Report ready:', data);
});

bus.emit('report', { lines: 120 });