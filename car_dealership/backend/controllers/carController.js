const Car = require('../models/carModel');

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (car) res.json(car);
    else res.status(404).json({ message: 'Car not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// GET car by model
const getCarByModel = async (req, res) => {
  try {
    const car = await Car.findOne({ model: req.params.model });
    console.log()
    if (car) res.json(car);
    else res.status(404).json({ message: 'Car not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {getCarByModel, getCars, getCarById };
