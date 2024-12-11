const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); 
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');  // Assuming you have routes set up
const Car = require('./models/carModel');

dotenv.config();  // Load environment variables from .env

const app = express();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('Error connecting to MongoDB:', error));

// Middleware setup
app.use(cors());
app.use(bodyParser.json());  // For parsing application/json

// Routes
app.use('/api/cars', carRoutes);

app.get('/wsdl/carService.wsdl', (req, res) => {
  const wsdlPath = path.join(__dirname, 'carService.wsdl');
  console.log(wsdlPath); // Logs the resolved path
  res.sendFile(wsdlPath);
});


// Set up the server to listen on the port defined in the .env file
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
