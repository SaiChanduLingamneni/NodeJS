const Car = require('../models/carModel'); // Importing the Car model for database operations

// Function to get all cars from the database
const getCars = async (req, res) => {
  try {
    const cars = await Car.find({}); // Fetch all cars
    res.json(cars); // Send the list of cars as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send an error message if something goes wrong
  }
};

// Function to get cars by category
const getCarByCategory = async (req, res) => {
  try {
    const category = req.params.category; // Get category from request parameters
    const cars = await Car.find({ category }); // Find cars matching the category
    res.json(cars); // Send the list of cars as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send an error message if something goes wrong
  }
};

// Function to get a car by its model
const getCarByModel = async (req, res) => {
  try {
    const car = await Car.findOne({ model: req.params.model }); // Find a car by its model
    if (car) res.json(car); // Send the car details as a JSON response if found
    else res.status(404).json({ message: 'Car not found' }); // Send a 404 error if the car is not found
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send an error message if something goes wrong
  }
};

// Function to get cars based on filters (category, minPrice, maxPrice)
const getCarbyFilter = async (req, res) => {
  const { category, minPrice, maxPrice } = req.query; // Extract query parameters

  const query = {}; // Initialize an empty query object

  if (category) {
    query.category = category; // Add category filter if provided
  }

  if (minPrice) {
    query.price = { ...query.price, $gte: Number(minPrice) }; // Add minimum price filter
  }

  if (maxPrice) {
    query.price = { ...query.price, $lte: Number(maxPrice) }; // Add maximum price filter
  }

  try {
    const filteredCars = await Car.find(query); // Fetch cars matching the filters
    res.json(filteredCars); // Send the filtered list of cars as a JSON response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send an error message if something goes wrong
  }
};

// Exporting the functions for use in other files
module.exports = { getCarByModel, getCars, getCarByCategory, getCarbyFilter };
