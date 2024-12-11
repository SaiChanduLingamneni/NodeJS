import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Importing the react-slick slider
import '../styles/Home.css'; // Importing the global Home page styles

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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

      {/* Main Content */}
      <main className="main-content">
        <div>
          <h2>Welcome to the world of High-Performance</h2>
        </div>

        {/* Image Slider Section */}
        <div className="image-slider">
          <Slider {...sliderSettings}>
            <div>
              <img
                src={require('../assets/welcome.jpg')}
                alt="Welcome Slide 1"
                className="slider-image"
              />
            </div>
            <div>
              <img
                src={require('../assets/welcome2.jpg')}
                alt="Welcome Slide 2"
                className="slider-image"
              />
            </div>
            <div>
              <img
                src={require('../assets/welcome3.jpg')}
                alt="Welcome Slide 3"
                className="slider-image"
              />
            </div>
          </Slider>
        </div>

        {/* Square Section with Categories */}
        <div className="square-section">
          <div className="category-card">
            <Link to="/CarList/Sedan">
              <img
                src={require('../assets/squareimage.jpg')}
                alt="Sedan"
                className="square-image"
              />
            </Link>
            <div className="category-text">Sedans</div>
          </div>
          <div className="category-card">
            <Link to="/CarList/SUV">
              <img
                src={require('../assets/squareimage.jpg')}
                alt="SUV"
                className="square-image"
              />
            </Link>
            <div className="category-text">SUVs</div>
          </div>
          <div className="category-card">
            <Link to="/CarList/Sports">
              <img
                src={require('../assets/squareimage.jpg')}
                alt="Sports"
                className="square-image"
              />
            </Link>
            <div className="category-text">Sports Cars</div>
          </div>
        </div>

        {/* Content Section */}
        {/* Content Section */}
<div className="content-section">
  <div className="content-left">
    <h2>Welcome to Merce-Lux</h2>
    <p>
      Your dealership in the heart of the city. Your gateway to luxury and performance,
      conveniently situated in the city center. Whether you’re navigating highways or city
      streets, Merce-Lux is your trusted partner for all things automotive.
    </p>

    <h3>AMG Performance Excellence</h3>
    <p>
      Experience the thrill of precision engineering and exhilarating performance at our
      AMG Performance Centre. From the growl of the engine to the seamless handling,
      every detail is meticulously crafted to deliver the ultimate driving experience.
    </p>

    <h3>Unrivaled Inventory and Bespoke Service</h3>
    <p>
      Explore our 3-story showroom, where dreams come to life. Whether you’re seeking a new
      luxury vehicle or a certified pre-owned gem, our extensive inventory caters to every
      taste and aspiration. Our finance team is ready to create a package tailored to your
      unique needs.
    </p>

    <h3>Quality Assurance and Genuine Parts</h3>
    <p>
      At Merce-Lux, we uphold the highest standards. Our certified technicians use only
      genuine parts to maintain the quality, integrity, and performance of your vehicle.
      With state-of-the-art service bays, we handle all maintenance and repairs promptly
      and efficiently.
    </p>

    <h3>A Commitment to Excellence</h3>
    <p>
      Whether you’re drawn to the thrill of performance models or the timeless elegance of
      luxury classics, Merce-Lux promises to make your ownership journey extraordinary.
    </p>
  </div>
  
  <div className="content-right">
    <img
      src={require('../assets/showroom.jpg')}
      alt="Showroom"
      className="showroom-image"
    />
  </div>
</div>

      </main>
      {/* Google Maps Section */}
<div className="location-map">
  <h2>Visit Us</h2>
  <iframe
    title="Merce-Lux Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509667!2d144.96305791531654!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57766733e5f6af5!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1699093959130!5m2!1sen!2sau"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
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

export default Home;