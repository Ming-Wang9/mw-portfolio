import { Link } from 'react-router-dom';
import React from 'react';
import backgroundImage from '../background_image/mountianbike.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="homepage-container">
      {/* Background Image */}
      <img 
        src={backgroundImage} 
        alt="Mountain Bike Background" 
        className="home-background-image"
        aria-hidden="true"
      />

      {/* Content Section */}
      <div className="home-content-wrapper">
        <div className="home-left-section">
          <h1 className="home-name-title">Ming H. Wang</h1>
          
          <div className="home-languages-container">
            Python | Java | JavaScript | SQL | C++
          </div>

          {/* Button Container */}
          <div className="home-button-container">
            {/* First Row */}
            <div className="home-button-row">
              <a
                href="https://github.com/Ming-Wang9"
                target="_blank"
                rel="noopener noreferrer"
                className="home-button"
              >
                MY PROJECTS
              </a>
              <Link to="/contact" className="home-button">
                CONTACT ME
              </Link>
            </div>

            {/* Second Row */}
            <div className="home-button-row">
              <a
                href="/media/MingWang_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="home-button"
              >
                RESUME
              </a>
            </div>
          </div>

          {/* Logo Below the Buttons */}
          <div className="home-logo-container">
            <img 
              src="/media/home_logo.png" // Path to your logo
              alt="Logo" 
              className="home-logo" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;