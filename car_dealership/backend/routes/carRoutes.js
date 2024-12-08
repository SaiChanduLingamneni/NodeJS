const express = require('express');
const Car = require('../models/carModel');

const router = express.Router();

// GET all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find({});
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET cars by category
router.get('/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const cars = await Car.find({ category });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
