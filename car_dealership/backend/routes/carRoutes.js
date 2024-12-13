const express = require('express'); // Importing Express framework
const Car = require('../models/carModel'); // Importing the Car model
const { getCarByModel, getCars, getCarByCategory, getCarbyFilter } = require('../controllers/carController'); // Importing controller functions for handling requests

const router = express.Router(); // Creating an Express router instance

// Route to get all cars
// Endpoint: GET /
router.get('/', getCars);

// Route to get cars by category
// Endpoint: GET /category/:category
router.get('/category/:category', getCarByCategory);

// Route to get a car by its model
// Endpoint: GET /cars/model/:model
router.get('/cars/model/:model', getCarByModel);

// Route to filter cars based on query parameters (category, minPrice, maxPrice)
// Endpoint: GET /filter
router.get('/filter', getCarbyFilter);

module.exports = router; // Exporting the router for use in other parts of the application
