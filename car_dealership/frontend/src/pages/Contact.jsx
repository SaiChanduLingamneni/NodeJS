import React from 'react';
import { Link } from 'react-router-dom';// Importing the same styles as the Home page
import '../styles/Home.css'; // Contact page specific styles

function Contact() {
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

      {/* Main Content for Contact Us */}
      <main className="main-content">
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you! Whether you have a question about our vehicles, services, or any other inquiries,
            feel free to reach out to us. Our team is here to provide you with the best possible experience.
          </p>

          <div className="contact-details">
            <h3>Our Contact Information</h3>
            <p><strong>Phone:</strong> +1 (437) 660-6607</p>
            <p><strong>Email:</strong> <a href="mailto:info@mymercelux.ca">info@mymercelux.ca</a></p>
            <p><strong>Address:</strong> Toronto, Ontario</p>

            <h3>Visit Our Dealership</h3>
            <p>
              We are conveniently located in the heart of Toronto. Feel free to stop by and explore our wide selection
              of luxury and high-performance vehicles. Our team is always ready to assist you in finding the car of your dreams.
            </p>

            <h3>Business Hours</h3>
            <ul>
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
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

export default Contact;
