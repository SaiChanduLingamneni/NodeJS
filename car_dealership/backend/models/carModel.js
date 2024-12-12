const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  image_2: { type: String, required: true },
  image_3: { type: String, required: true },
  additionalImages: [{ type: String }],  // Additional images for hover
  category: { type: String, enum: ['Sedan', 'SUV', 'Sports'], required: true },
  details: {
    exterior: { type: String },
    make: { type: String },
    year: { type: String },
    VIN: { type: String },
    fuelEfficiency: { type: String },
    keyFeatures: [String],  // Array of key features
    scheduleTestDrive: { type: Boolean, default: false },
    checkAvailability: { type: Boolean, default: false },
    premiumOptions: [String],  // Array of premium options
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
