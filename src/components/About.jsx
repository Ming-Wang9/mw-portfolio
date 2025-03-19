import React from 'react';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faReact, faDocker, faCuttlefish } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import Loader from 'react-loaders';
import topImage from '../background_image/surfing_jump.jpg';

const About = () => {
  return (
    <div className="about-container">
      {/* Background images outside of any card */}
      <div className="about-background-overlay"></div> {/* New overlay layer */}
      <img src={topImage} alt="Background top" className="about-background-image" />
    
      {/* About Me Section */}
      <div className="about-card about-me-card">
        <div className="about-card-header">
          <h2>About Me</h2>
        </div>
        <div className="about-card-body">
          <p>
            I am a Computer Science student at the University of Wisconsin at Madison
            and plan to graduate in 2026. I am looking for internship opportunities
            in order to further develop my skillset and practice what I love.
          </p>
        </div>
      </div>

     {/* Skills Section */}
      <div className="about-card skills-card">
        <div className="about-card-header">
          <h2>Skills</h2>
        </div>
        <div className="about-card-body">
          <div className="about-card-section">
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="about-card-section">
            <h3>Frontend Design</h3>
            <ul>
              <li>Git</li>
              <li>React</li>
              <li>Npm</li>
              <li>Angular</li>
              <li>bootstrap</li>
              <li>HTML/CSS</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="about-card-section">
            <h3>Backend Technologies</h3>
            <ul>
              <li>Linux</li>
              <li>Docker</li>
              <li>Spark</li>
              <li>RPC</li>
              <li>Cassandra</li>
              <li>Google Cloud</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Projects Section */}
      <div className="about-card projects-card">
        <div className="about-card-header">
          <h2>Projects</h2>
        </div>
        <div className="about-card-body">
          <div className="about-card-section">
            <h3>Personal Portfolio</h3>
            <ul>
              <li>Developed a responsive personal website using React to showcase projects and experience with a focus on clean UI/UX design</li>
              <li>Utilized cross-device compatibility and seamless navigation, allowing users to access the site effortlessly on desktops, tablets, and
              mobile devices</li>
            </ul>
          </div>
          <div className="about-card-section">
            <h3>CollegeMate</h3>
            <ul>
              <li>Created a real-time cross-platform chat platform for university students using React, enabling seamless communication across multiple chatrooms and responsive design with Bootstrap</li>
              <li>Implemented secure user authentication workflows, including registration, login, and logout, utilizing JWT for token-based security and data protection</li>
            </ul>
          </div>
          <div className="about-card-section">
            <h3>Machine Learning</h3>
            <ul>
              <li>Enhanced decision-making speed by 25% in Tic-Tac-Toe using the Minimax, Alpha-Beta pruning computing via multiprocessing</li>
              <li>Achieved over 90% accuracy in image classification using Convolutional Neural Networks (CNNs) to identify potential matches
              by generating photorealistic faces based on key descriptions and facial features</li>
            </ul>
          </div>
          <div className="about-card-section">
            <h3>Docker and Spark</h3>
            <ul>
              <li>Utilized Docker containers for scalable deployment, ensuring high availability and efficient memory management</li>
              <li>Built a fault-tolerant, load-balanced microservice using gRPC and HTTP with LRU caching, optimizing response times for ZIP
              code-based home lookup services</li>
            </ul>
          </div>
          <div className="about-card-section">
            <h3>Database Management</h3>
            <ul>
              <li>Designed and implemented a relational database schema in MySQL to store and efficiently query large-scale eBay auction data</li>
              <li>Transformed over 900KB large JSON datasets into structured relational data, executing SQL queries for advanced analytics</li>
            </ul>
          </div>
          <div className="about-card-section">
            <h3>Health Insurance in America</h3>
            <ul>
              <li>Analyzed 10 years of U.S. health insurance data using Census Bureau APIs, uncovering trends in coverage disparities</li>
              <li>Leveraged Matplotlib, Seaborn, and GeoPandas to create interactive time-series geospatial visualizations, providing insights into
              healthcare spending inequalities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coursework Section */}
      <div className="about-card coursework-card">
        <div className="about-card-header">
          <h2>Coursework</h2>
        </div>
        <div className="about-card-body">
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>perating Systems (C, Linux)</li>
            <li>Building User Interface (JavaScript, HTML, CSS)</li>
            <li>Database Management</li>
            <li>Big Data System</li>
            <li>Intro to AI</li>
          </ul>
        </div>
      </div>

      {/* Cube Spinner Section */}
      <div className="about-stage-cube-cont">
        <div className="about-cubespinner">
          <div className="about-face1">
            <FontAwesomeIcon icon={faJava} color="#F89820" />
          </div>
          <div className="about-face2">
            <FontAwesomeIcon icon={faPython} color="#306998" />
          </div>
          <div className="about-face3">
            <FontAwesomeIcon icon={faReact} color="#61DBFB" />
          </div>
          <div className="about-face4">
            <FontAwesomeIcon icon={faDocker} color="#2496ED" />
          </div>
          <div className="about-face5">
            <FontAwesomeIcon icon={faDatabase} color="#F0DB4F" />
          </div>
          <div className="about-face6">
            <FontAwesomeIcon icon={faCuttlefish} color="#f89820" />
          </div>
        </div>
      </div>

      <Loader type="ball-grid-pulse" />
    </div>
  );
};

export default About;