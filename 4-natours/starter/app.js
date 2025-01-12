const fs = require('fs');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours/', (req, res) => {
  const newTour = Object.assign(req.body, { id: tours.length });
  console.log(req.body, newTour);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(200).send({
        status: 'success',
        data: newTour,
      });
    }
  );
});

app.get('/api/v1/tours/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
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
