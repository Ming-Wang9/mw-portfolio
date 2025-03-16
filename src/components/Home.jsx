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

          <div className="home-button-container">
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
        </div>
      </div>
    </div>
  );
};

export default Home;