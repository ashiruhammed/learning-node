const fs = require('fs');
const app = require('express')();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const port = 3000;

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server side',
  });
});

app.listen(port, () => {
  console.log('APP IS RUNNING ON PORT ${3000}');
});
