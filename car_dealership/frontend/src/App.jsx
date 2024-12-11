import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';   // Adjust the path if needed
import About from './pages/About'; // Adjust the path if needed
import Contact from './pages/Contact';
import CarList from './pages/CarList';
import CarDetails from './pages/CarDetails'; // Adjust the path based on your file structure
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 // Adjust the path if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CarList" element={<CarList />} />
        <Route path="/CarList/:category" element={<CarList />} />
        <Route path="/car-details/:model" element={<CarDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
