import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Athletics from "./components/Athletics";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router basename="/mw-portfolio">
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
    </Router>
  );
};

export default App;