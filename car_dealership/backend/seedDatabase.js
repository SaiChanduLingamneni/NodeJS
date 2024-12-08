const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Car = require('./models/carModel');

dotenv.config();

const seedCars = async () => {
    const cars = [
        // Sedans
        {
          name: 'Mercedes-Benz S-Class',
          model: 'S500',
          price: 115000,
          image: 'sclass_1.jpeg',
          category: 'Sedan',
        },
        {
          name: 'Mercedes-Benz E-Class',
          model: 'E350',
          price: 62000,
          image: 'eclass_1.jpeg',
          category: 'Sedan',
        },
        {
          name: 'Mercedes-Benz C-Class',
          model: 'C300',
          price: 45000,
          image: 'cclass_1.jpeg',
          category: 'Sedan',
        },
        {
          name: 'Mercedes-AMG GT 4-Door Coupe',
          model: 'GT53',
          price: 92000,
          image: 'gt4_1.jpeg',
          category: 'Sedan',
        },
        {
          name: 'Mercedes-Benz CLA',
          model: 'CLA250',
          price: 40000,
          image: 'cla_1.jpeg',
          category: 'Sedan',
        },
        {
          name: 'Mercedes-Benz A-Class',
          model: 'A200',
          price: 35000,
          image: 'aclass_1.jpeg',
          category: 'Sedan',
        },
      
        // SUVs
        {
          name: 'Mercedes-Benz G-Class',
          model: 'G550',
          price: 140000,
          image: 'gclass_1.jpeg',
          category: 'SUV',
        },
        {
          name: 'Mercedes-Benz GLS',
          model: 'GLS580',
          price: 105000,
          image: 'gls_1.jpeg',
          category: 'SUV',
        },
        {
          name: 'Mercedes-Benz GLE',
          model: 'GLE450',
          price: 70000,
          image: 'gle_1.jpeg',
          category: 'SUV',
        },
        {
          name: 'Mercedes-Benz GLC',
          model: 'GLC300',
          price: 55000,
          image: 'glc_1.jpeg',
          category: 'SUV',
        },
        {
          name: 'Mercedes-Benz GLB',
          model: 'GLB250',
          price: 45000,
          image: 'glb_1.jpeg',
          category: 'SUV',
        },
        {
          name: 'Mercedes-Benz EQS SUV',
          model: 'EQS450+',
          price: 125000,
          image: 'eqs_1.jpeg',
          category: 'SUV',
        },
      
        // Sports Cars
        {
          name: 'Mercedes-AMG GT',
          model: 'GT63 S',
          price: 180000,
          image: 'gt_1.jpeg',
          category: 'Sports',
        },
        {
          name: 'Mercedes-AMG SL',
          model: 'SL55',
          price: 135000,
          image: 'sl_1.jpeg',
          category: 'Sports',
        },
        {
          name: 'Mercedes-AMG C63 S Coupe',
          model: 'C63 S',
          price: 79000,
          image: 'c63_1.jpeg',
          category: 'Sports',
        },
        {
          name: 'Mercedes-AMG A45 S',
          model: 'A45 S',
          price: 67000,
          image: 'a45_1.jpeg',
          category: 'Sports',
        },
        {
          name: 'Mercedes-AMG E63 S',
          model: 'E63 S',
          price: 108000,
          image: 'e63_1.jpeg',
          category: 'Sports',
        },
        {
          name: 'Mercedes-AMG S63 Coupe',
          model: 'S63 Coupe',
          price: 170000,
          image: 's63_1.jpeg',
          category: 'Sports',
        },
      ];
      

  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Car.deleteMany();
    await Car.insertMany(cars);
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedCars();
