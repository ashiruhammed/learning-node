const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev')); // Add logging middleware

// Custom middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use('/api/v1/tours', tourRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
