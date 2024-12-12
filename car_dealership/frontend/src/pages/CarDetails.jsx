import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCarByModel } from "../services/carService"; // Fetch function for car details
import "../styles/CarDetails.css"; 
import { Link } from 'react-router-dom';

function CarDetails() {
  const { model } = useParams(); // Get the car model from URL params
  const [car, setCar] = useState(null);
  const [mainImage, setMainImage] = useState(""); // State for main image display

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const fetchedCar = await fetchCarByModel(model); // Fetch car details by model
        setCar(fetchedCar);
        setMainImage(fetchedCar.image); // Set the default main image
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchDetails();
  }, [model]); // Refetch when the model changes

  if (!car) return <p>Loading car details...</p>;

  // Destructure car details for easier use later
  const { details,image, image_2, image_3 } = car;
  console.log(car);
  const hasDetails = details && Object.keys(details).length > 0; // Check if details exist

  return (
    <div className="car-details-page">
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
            <li><Link to="/CarList">View Inventory</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="car-details-main">
        <section className="car-summary">
          <h2 className="car-title">{car.name} - {car.model}</h2>
          
          {/* Price and Category */}
          <div className="car-price-category">
            <p><strong>Price:</strong> ${car.price}</p>
            <p><strong>Category:</strong> {car.category}</p>
          </div>
        </section>

       {/* Car Image and Info */}
       <section className="car-image-and-info">
          <div className="car-image-container">
            {/* Main image */}
            <img
  src={`/assets/cars/${mainImage}`}
  alt={car.name}
  className="car-main-image"
/>

<div className="thumbnail-images">
  {[image, image_2, image_3].map((img, index) => (
    <img
      key={index}
      src={`/assets/cars/${img}`}
      alt={`Thumbnail ${index + 1}`}
      className={`thumbnail ${mainImage === img ? "active" : ""}`}
      onClick={() => setMainImage(img)}
    />
  ))}
</div>

          </div>

          <div className="car-details-container">
            {/* Car Details */}
            {hasDetails && (
              <section className="car-details-section">
                <h3>Car Details</h3>
                <div className="car-detail-item">
                  <strong>Exterior Color:</strong> {details.exterior}
                </div>
                <div className="car-detail-item">
                  <strong>Make:</strong> {details.make}
                </div>
                <div className="car-detail-item">
                  <strong>Year:</strong> {details.year}
                </div>
                <div className="car-detail-item">
                  <strong>VIN:</strong> {details.VIN}
                </div>
                <div className="car-detail-item">
                  <strong>Fuel Efficiency:</strong> {details.fuelEfficiency}
                </div>
              </section>
            )}

<section className="car-features-section">
  <h3>Key Features</h3>
  <div className="features-container">
    {details?.keyFeatures?.length > 0 ? (
      <div className="feature-row">
        {details.keyFeatures.slice(0, 3).map((feature, index) => (
          <div className="feature-item" key={index}>
            {feature}
          </div>
        ))}
      </div>
    ) : (
      <p>No key features available</p>
    )}
    {details?.keyFeatures?.length > 3 && (
      <div className="feature-row">
        {details.keyFeatures.slice(3, 6).map((feature, index) => (
          <div className="feature-item" key={index}>
            {feature}
          </div>
        ))}
      </div>
    )}
  </div>
</section>

<section className="car-premium-options-section">
  <h3>Premium Options</h3>
  <div className="features-container">
    {details?.premiumOptions?.length > 0 ? (
      <div className="feature-row">
        {details.premiumOptions.slice(0, 3).map((option, index) => (
          <div className="feature-item" key={index}>
            {option}
          </div>
        ))}
      </div>
    ) : (
      <p>No premium options available</p>
    )}
    {details?.premiumOptions?.length > 3 && (
      <div className="feature-row">
        {details.premiumOptions.slice(3, 6).map((option, index) => (
          <div className="feature-item" key={index}>
            {option}
          </div>
        ))}
      </div>
    )}
  </div>
</section>
            {/* Test Drive and Availability */}
            <section className="car-test-drive-section">
              {details?.scheduleTestDrive && (
                <button className="test-drive-btn">Schedule Test Drive</button>
              )}
              {details?.checkAvailability && (
                <button className="availability-btn">Check Availability</button>
              )}
            </section>
          </div>
        </section>

        {/* Additional Images Section */}
        {car.additionalImages?.length > 0 && (
          <section className="additional-images-section">
            <h3>More Images</h3>
            <div className="additional-images-gallery">
              {car.additionalImages.map((img, index) => (
                <img
                  key={index}
                  src={require(`../assets/cars/${img}`)}
                  alt={`Additional ${index + 1}`}
                  className="additional-image"
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="social-media">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/facebook.png")}
              alt="Facebook"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/instagram.png")}
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/gmail.png")}
              alt="Gmail"
              className="social-icon"
            />
          </a>
        </div>
        <p>&copy; 2024 Merce-Lux. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default CarDetails;
