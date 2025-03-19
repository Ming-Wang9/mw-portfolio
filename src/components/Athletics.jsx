import React, { useState } from 'react';
import "../styles/Athletic.css";

const sports = [
  {
    title: "Fencer",
    images: ["../media/fencing_1.jpg", "../media/fencing_2.jpg", "../media/fencing_3.jpg", "../media/fencing_4.jpg"], 
    description: "I am a foil and epee fencer — quick on my feet and even quicker with a blade!"
  },
  {
    title: "Surfer",
    images: ["../media/surfing_1.jpg", "../media/surfing_2.jpg", "../media/surfing_3.jpg", "../media/surfing_4.jpg"], 
    description: "Chasing the perfect wave — call me Moana!"
  },
  {
    title: "Short Track Speed Skater",
    images: ["../media/skating_1.jpg", "../media/skating_2.jpg", "../media/skating_3.jpg"], 
    description: "Fast turns, sharp blades — it’s a race against time and gravity!"
  },
  {
    title: "Cyclist",
    images: ["../media/biking_1.jpg", "../media/biking_2.jpg"], 
    description: "Nothing beats the thrill of long-distance cycling through the Swiss mountains!"
  },
  {
    title: "Hiker",
    images: ["../media/hiking_1.jpg", "../media/hiking_2.jpg"], 
    description: "Exploring trails fuels my soul — the steeper, the better!"
  },
  {
    title: "Skateboarder",
    images: ["../media/skateboard_1.jpg", "../media/skateboard_2.jpg"], 
    description: "Balancing on four wheels is easy — until it isn’t!"
  },
  {
    title: "Paraglider",
    images: ["../media/paragliding_1.jpg"], 
    description: "Soaring through the skies feels like freedom!"
  },
  {
    title: "Snowboarder",
    images: ["../media/snowboarding_1.jpg"], 
    description: "Carving down the slopes with the wind in my face!"
  },
];

const Athletic = () => {
  // Track the expanded state of each card individually
  const [expandedCards, setExpandedCards] = useState({});
  const [currentImageIndices, setCurrentImageIndices] = useState(
    sports.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  // Toggle the expanded state of a specific card
  const toggleCard = (index) => {
    setExpandedCards((prevExpandedCards) => ({
      ...prevExpandedCards,
      [index]: !prevExpandedCards[index], // Toggle the expanded state for this card
    }));
  };

  const nextImage = (images, index) => {
    setCurrentImageIndices((prevIndices) => ({
      ...prevIndices,
      [index]: (prevIndices[index] + 1) % images.length,
    }));
  };

  const prevImage = (images, index) => {
    setCurrentImageIndices((prevIndices) => ({
      ...prevIndices,
      [index]: (prevIndices[index] - 1 + images.length) % images.length,
    }));
  };

  return (
    <div className="athletic-page">
      {/* Introduction Paragraph and Logo */}
      <div className="intro-container">
        <div className="intro-paragraph">
          <p>
            I always have an Olympics dream. I was so close to the Olympics stage... however, I was only a substitute on my team.
            But nothing is going to stop me from being an adventurer and explorer!
          </p>
        </div>

        {/* Logo on the Same Line */}
        <div className="athletic-logo-container">
          <img 
            src="/media/athletics_logo.png" // Path to your athletics logo
            alt="Logo" 
            className="athletic-logo" 
          />
        </div>
      </div>

      {/* Sports Cards */}
      <div className="sports-container">
        {sports.map((sport, index) => (
          <div
            key={index}
            className={`sport-card ${expandedCards[index] ? 'expanded' : ''}`}
          >
            {/* Carousel for Images */}
            <div className="carousel">
              {sport.images.length > 1 && ( 
                <>
                  <button className="carousel-button prev" onClick={() => prevImage(sport.images, index)}>
                    &#10094;
                  </button>
                  <button className="carousel-button next" onClick={() => nextImage(sport.images, index)}>
                    &#10095;
                  </button>
                </>
              )}
              <img
                src={sport.images[currentImageIndices[index]]}
                alt={`${sport.title} - ${currentImageIndices[index] + 1}`}
                className="carousel-image"
              />
              {sport.images.length > 1 && ( 
                <div className="carousel-dots">
                  {sport.images.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`dot ${currentImageIndices[index] === dotIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndices((prevIndices) => ({
                        ...prevIndices,
                        [index]: dotIndex,
                      }))}
                    ></span>
                  ))}
                </div>
              )}
            </div>

            {/* Sport Title (Button) */}
            <div className="sport-info">
              <button className="sport-title-button" onClick={() => toggleCard(index)}>
                {sport.title}
              </button>
            </div>

            {/* Expanded Description */}
            {expandedCards[index] && (
              <div className="sport-description">
                <p>{sport.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Athletic;