const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.on('newSale', () => {
  console.log('new sale has been made');
});

myEvent.emit('newSale');
