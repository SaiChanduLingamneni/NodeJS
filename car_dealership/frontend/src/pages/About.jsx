import React from 'react';
import { Link } from 'react-router-dom';// Importing the same styles as the Home page
import '../styles/Home.css'; // About page specific styles

function About() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src={require('../assets/logo2.png')} // Correctly importing the logo image
            alt="Merce-Lux"
            className="logo"
          />
        </div>
        <div>
          <h1>MERCE-LUX</h1>
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/CarList">View-Inventory</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content for About Us */}
      <main className="main-content">
  <div className="content">
    <h2>About Merce-Lux</h2>
    
    <section className="intro">
      <p>
        Welcome to Merce-Lux, your premier destination for luxury and high-performance vehicles. Founded with a passion for excellence, 
        Merce-Lux brings together the finest automobiles with the highest standards of customer service.
      </p>
      <p>
        Located in the heart of Toronto, we specialize in offering a curated selection of Mercedes-Benz vehicles, including both new and certified pre-owned models. 
        Our team is committed to providing an exceptional experience, whether you're exploring our showroom, browsing our online inventory, 
        or experiencing our top-notch after-sales service.
      </p>
    </section>

    <section className="vision">
      <h3>Our Vision</h3>
      <p>
        At Merce-Lux, we believe in offering more than just cars; we offer a lifestyle. Our goal is to provide a seamless and luxurious experience, 
        from the moment you step into our dealership to the moment you drive away in your dream car.
      </p>
    </section>

    <section className="values">
      <h3>Our Values</h3>
      <ul>
        <li><strong>Customer-Centric Service:</strong> We prioritize your needs and aim to exceed expectations.</li>
        <li><strong>Unmatched Quality:</strong> Only the best vehicles and parts make it to our showroom.</li>
        <li><strong>Performance & Luxury:</strong> We specialize in high-performance vehicles that redefine driving pleasure.</li>
        <li><strong>Integrity:</strong> Our business practices are transparent, ethical, and built on trust.</li>
      </ul>
    </section>

    <section className="why-choose">
      <h3>Why Choose Merce-Lux?</h3>
      <p>
        With a wide variety of vehicles to choose from, you’ll find the perfect match for your driving style and needs at Merce-Lux. 
        Our dedicated team ensures you receive personalized attention to make your car-buying experience as smooth and enjoyable as possible. 
        Additionally, our state-of-the-art service center provides ongoing maintenance and repairs to keep your vehicle running at peak performance.
      </p>
      <p>
        Explore our dealership today, and join the family of satisfied Merce-Lux owners who experience luxury, performance, and unparalleled service every day.
      </p>
    </section>
  </div>
</main>


      {/* Footer */}
      <footer className="footer">
  <div className="social-media">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img
        src={require('../assets/facebook.png')}
        alt="Facebook"
        className="social-icon"
      />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img
        src={require('../assets/instagram.png')}
        alt="Instagram"
        className="social-icon"
      />
    </a>
    <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
      <img
        src={require('../assets/gmail.png')}
        alt="G-mail"
        className="social-icon"
      />
    </a>
  </div>
  <p>&copy; 2024 Merce-Lux. All Rights Reserved.</p>
</footer>

    </div>
  );
}

export default About;
