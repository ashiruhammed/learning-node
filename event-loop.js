const fs = require('fs');

setInterval(() => {
  console.log('From the interval');
}, 0);

setImmediate(() => console.log('from the immediate function'));

console.log('this is the top level code');
