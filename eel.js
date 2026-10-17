//Custom Event Emitter with Listener

const { EventEmitter } = require('node:events');

const bus = new EventEmitter();

bus.on('userJoined', (name) => {
  console.log(`Welcome to the application, ${name}!`);
});

bus.emit('userJoined', 'Alex');
