import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCars, fetchFilteredCars } from "../services/carService";
import "../styles/CarList.css";

function CarList() {
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const { category: routeCategory } = useParams();

  // Automatically set the category filter from the route
  useEffect(() => {
    if (routeCategory) {
      setFilters((prev) => ({
        ...prev,
        category: routeCategory,
      }));
      applyFilters({ category: routeCategory });
    } else {
      applyFilters({});
    }
  }, [routeCategory]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Apply filters and fetch filtered data
  const applyFilters = async (filterParams = filters) => {
    try {
      const cars = await fetchFilteredCars(filterParams);
      setFilteredCars(cars);
    } catch (error) {
      console.error("Error fetching filtered cars:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters();
  };

  return (
    <div className="carlist-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src={require("../assets/logo2.png")}
            alt="Merce-Lux"
            className="logo"
          />
        </div>
        <h1>MERCE-LUX</h1>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/CarList">View Inventory</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Filter Section */}
      <div className="filter-container">
        <h2>Filter Cars</h2>
        <form className="filter-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleInputChange}
              disabled={!!routeCategory}
            >
              <option value="">All Categories</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleInputChange}
              placeholder="Enter minimum price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleInputChange}
              placeholder="Enter maximum price"
            />
          </div>

          <button className="filter-button" type="submit">
            Apply Filters
          </button>
        </form>
      </div>

      {/* Main Content */}
      <main className="carlist-main">
        <h2>
          {routeCategory
            ? `${routeCategory.charAt(0).toUpperCase() + routeCategory.slice(1)} Cars`
            : "Drive Your Dream"}
        </h2>
        <div className="carlist-grid">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div key={car._id} className="car-card">
                <Link to={`/car-details/${car.model}`}>
                  <img
                    src={require(`../assets/cars/${car.image}`)}
                    alt={car.name}
                    className="car-image"
                  />
                </Link>
                <h3>{car.name}</h3>
                <p>Model: {car.model}</p>
                <p>Price: ${car.price}</p>
              </div>
            ))
          ) : (
            <p>No cars available matching your criteria.</p>
          )}
        </div>
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

export default CarList;
