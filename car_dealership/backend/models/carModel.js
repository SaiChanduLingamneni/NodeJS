const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, enum: ['Sedan', 'SUV', 'Sports'], required: true },
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
