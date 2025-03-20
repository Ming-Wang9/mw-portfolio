import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Athletics from "./components/Athletics";
import Sidebar from "./components/Sidebar";

const App = () => {
  const location = useLocation();

  // Send page view to Google Analytics on route change
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <div className="app-container">
      <Sidebar /> {/* Sidebar always visible */}
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/athletics" element={<Athletics />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;