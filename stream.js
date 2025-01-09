const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const readableStream = fs.createReadStream('./test-file.txt');
  readableStream.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
