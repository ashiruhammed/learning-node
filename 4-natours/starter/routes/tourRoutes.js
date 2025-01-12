const express = require('express');
const router = express.Router();

const {
  getAllTours,
  createTour,
  getTour
} = require('../controllers/tourController');

router
  .route('/')
  .get(getAllTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour);

module.exports = router; 