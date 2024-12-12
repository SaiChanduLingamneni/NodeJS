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
          image_2:'sclass_2.jpeg',
          image_3:'sclass_3.jpeg',
          category: 'Sedan',
          details: {
            exterior: 'Black',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '9.5 CITY / 6.8 HWY L/100KM',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry', , 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-Benz E-Class',
          model: 'E350',
          price: 62000,
          image: 'eclass_1.jpeg',
          image_2: 'eclass_2.jpeg',
          image_3: 'eclass_3.jpeg',
          category: 'Sedan',
          details: {
            exterior: 'Black',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '9.5 CITY / 6.8 HWY L/100KM',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Active Parking Assist Front And Rear Parking Sensors', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-Benz C-Class',
          model: 'C300',
          price: 45000,
          image: 'cclass_1.jpeg',
          image_2: 'cclass_2.jpeg',
          image_3: 'cclass_3.jpeg',
          category: 'Sedan',
          details: {
            exterior: 'Black',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '9.5 CITY / 6.8 HWY L/100KM',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry',  'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-AMG GT 4-Door Coupe',
          model: 'GT53',
          price: 92000,
          image: 'gt4_1.jpeg',
          image_2: 'gt4_2.jpeg',
          image_3: 'gt4_3.jpeg',
          category: 'Sedan',
          details: {
            exterior: 'Polar White',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '9.5 CITY / 6.8 HWY L/100KM',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-Benz CLA',
          model: 'CLA250',
          price: 40000,
          image: 'cla_1.jpeg',
          image_2: 'cla_2.jpeg',
          image_3: 'cla_3.jpeg',
          category: 'Sedan',
          details: {
            exterior: 'Polar White',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '9.5 CITY / 6.8 HWY L/100KM',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry', 'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-Benz A-Class',
          model: 'A200',
          price: 35000,
          image: 'aclass_1.jpeg',
          image_2: 'aclass_2.jpeg',
          image_3: 'aclass_3.jpeg',
          category: 'Sedan',
          details: {
            exterior: 'Polar White',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '9.5 CITY / 6.8 HWY L/100KM',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry',  'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
      
        // SUVs
        {
          name: 'Mercedes-Benz G-Class',
          model: 'G550',
          price: 140000,
          image: 'gclass_1.jpeg',
          image_2: 'gclass_2.jpeg',
          image_3: 'gclass_3.jpeg',
          category: 'SUV',
          details: {
            exterior: 'Obsidian Black',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '13 CITY / 17 HWY MPG',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats','Keyless Entry', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-Benz GLS',
          model: 'GLS580',
          price: 105000,
          image: 'gls_1.jpeg',
          image_2: 'gls_2.jpeg',
          image_3: 'gls_3.jpeg',
          category: 'SUV',
          details: {
            exterior: 'Iridium Silver',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '14 CITY / 19 HWY MPG',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry','Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-Benz GLE',
          model: 'GLE450',
          price: 70000,
          image: 'gle_1.jpeg',
          image_2: 'gle_2.jpeg',
          image_3: 'gle_3.jpeg',
          category: 'SUV',
          details: {
            exterior: 'Obsidian Black',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '19 CITY / 26 HWY MPG',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry',  'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-Benz GLC',
          model: 'GLC300',
          price: 55000,
          image: 'glc_1.jpeg',
          image_2: 'glc_2.jpeg',
          image_3: 'glc_3.jpeg',
          category: 'SUV',
          details: {
            exterior: 'Iridium Silver',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '22 CITY / 28 HWY MPG',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry',  'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-Benz GLB',
          model: 'GLB250',
          price: 45000,
          image: 'glb_1.jpeg',
          image_2: 'glb_2.jpeg',
          image_3: 'glb_3.jpeg',
          category: 'SUV',
          details: {
            exterior: 'Iridium Silver',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '21 CITY / 28 HWY MPG',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
        {
          name: 'Mercedes-Benz EQS SUV',
          model: 'EQS450+',
          price: 125000,
          image: 'eqs_1.jpeg',
          image_2: 'eqs_2.jpeg',
          image_3: 'eqs_3.jpeg',
          category: 'SUV',
          details: {
            exterior: 'Iridium Silver',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: 'N/A (Electric)',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Hands-Free Liftgate',
              'Heated Seats', 'Interior Accents', 'Keyless Entry', 'Parking Sensors / Assist', 'Power Seats',
              'Rain Sensing Wipers', 'Satellite Radio Ready', 'Sunroof / Moonroof', 'WiFi Hotspot'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Rear Fog Lamps',
              'Hands-Free Liftgate', 'Heated Front Seats', 'Keyless Entry',  'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Generic Sun/Moonroof', 'WiFi Hotspot'
            ]
          }
        },
      
        // Sports Cars
        {
          name: 'Mercedes-AMG GT',
          model: 'GT63 S',
          price: 180000,
          image: 'gt_1.jpeg',
          image_2: 'gt_2.jpeg',
          image_3: 'gt_3.jpeg',
          category: 'Sports',
          details: {
            exterior: 'Selenite Grey',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '15 CITY / 20 HWY MPG',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Heated Seats',
              'Interior Accents', 'Keyless Entry', 'Power Seats', 'Satellite Radio Ready', 'Sunroof / Moonroof'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Heated Front Seats',
              'Interior Trim - Piano Black', 'Keyless Entry', 'Active Parking Assist', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Sunroof / Moonroof'
            ]
          }
        },
        {
          name: 'Mercedes-AMG SL',
          model: 'SL55',
          price: 135000,
          image: 'sl_1.jpeg',
          image_2: 'sl_2.jpeg',
          image_3: 'sl_3.jpeg',
          category: 'Sports',
          details: {
            exterior: 'Iridium Silver',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '16 CITY / 22 HWY MPG',
            keyFeatures: [
              'RWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Heated Seats',
              'Interior Accents', 'Keyless Entry', 'Power Seats', 'Satellite Radio Ready', 'Sunroof / Moonroof'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'Rear Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Heated Front Seats',
              'Interior Trim - Piano Black', 'Keyless Entry', 'Active Parking Assist', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Sunroof / Moonroof'
            ]
          }
        },
        {
          name: 'Mercedes-AMG C63 S Coupe',
          model: 'C63 S',
          price: 79000,
          image: 'c63_1.jpeg',
          image_2: 'c63_2.jpeg',
          image_3: 'c63_3.jpeg',
          category: 'Sports',
          details: {
            exterior: 'Iridium Silver',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '17 CITY / 26 HWY MPG',
            keyFeatures: [
              'RWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Heated Seats',
              'Interior Accents', 'Keyless Entry', 'Power Seats', 'Satellite Radio Ready', 'Sunroof / Moonroof'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'Rear Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Heated Front Seats',
              'Interior Trim - Piano Black', 'Keyless Entry', 'Active Parking Assist', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Sunroof / Moonroof'
            ]
          }
        },
        {
          name: 'Mercedes-AMG A45 S',
          model: 'A45 S',
          price: 67000,
          image: 'a45_1.jpeg',
          image_2: 'a45_2.jpeg',
          image_3: 'a45_3.jpeg',
          category: 'Sports',
          details: {
            exterior: 'Cosmos Black',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '22 CITY / 29 HWY MPG',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Heated Seats',
              'Interior Accents', 'Keyless Entry', 'Power Seats', 'Satellite Radio Ready', 'Sunroof / Moonroof'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Heated Front Seats',
              'Interior Trim - Piano Black', 'Keyless Entry', 'Active Parking Assist', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Sunroof / Moonroof'
            ]
          }
        },
        {
          name: 'Mercedes-AMG E63 S',
          model: 'E63 S',
          price: 108000,
          image: 'e63_1.jpeg',
          image_2: 'e63_2.jpeg',
          image_3: 'e63_3.jpeg',
          category: 'Sports',
          details: {
            exterior: 'Iridium Silver',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '16 CITY / 24 HWY MPG',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Heated Seats',
              'Interior Accents', 'Keyless Entry', 'Power Seats', 'Satellite Radio Ready', 'Sunroof / Moonroof'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Heated Front Seats',
              'Interior Trim - Piano Black', 'Keyless Entry', 'Active Parking Assist', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Sunroof / Moonroof'
            ]
          }
        },
        {
          name: 'Mercedes-AMG S63 Coupe',
          model: 'S63 Coupe',
          price: 170000,
          image: 's63_1.jpeg',
          image_2: 's63_2.jpeg',
          image_3: 's63_3.jpeg',
          category: 'Sports',
          details: {
            exterior: 'Obsidian Black',
            make: 'Mercedes',
            year: '2018',
            VIN: 'WVGBV3AXXDW626077',
            fuelEfficiency: '15 CITY / 21 HWY MPG',
            keyFeatures: [
              'AWD', 'Backup Camera', 'Blind Spot Monitor', 'Bluetooth', 'Fog Lights', 'Heated Seats',
              'Interior Accents', 'Keyless Entry', 'Power Seats', 'Satellite Radio Ready', 'Sunroof / Moonroof'
            ],
            scheduleTestDrive: true,
            checkAvailability: true,
            premiumOptions: [
              'All Wheel Drive', 'Back-Up Camera', 'Blind Spot Monitor', 'Bluetooth Connection', 'Heated Front Seats',
              'Interior Trim - Piano Black', 'Keyless Entry', 'Active Parking Assist', 'Power Driver Seat',
              'Rain Sensing Wipers', 'Satellite Radio', 'Sunroof / Moonroof'
            ]
          }
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
