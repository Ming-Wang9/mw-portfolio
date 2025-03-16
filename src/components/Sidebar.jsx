import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaEnvelope, FaLinkedin, FaGithub, FaNewspaper } from "react-icons/fa";
import { TbOlympics } from "react-icons/tb";  
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const pageThemes = {
    '/mw-portfolio/': 'sidebar-home', 
    '/mw-portfolio/about': 'sidebar-about',
    '/mw-portfolio/contact': 'sidebar-contact',
    '/mw-portfolio/linkedin': 'sidebar-linkedin',
    '/mw-portfolio/github': 'sidebar-github',
    '/mw-portfolio/athletics': 'sidebar-athletics'
  };

  const currentThemeClass = pageThemes[location.pathname] || pageThemes['/mw-portfolio/'];

  const navItems = [
    { path: "/mw-portfolio/#/", icon: <FaHome />, text: "Home" },
    { path: "/mw-portfolio/#/about", icon: <FaUser />, text: "About" },
    { 
      isResume: true, 
      icon: <FaNewspaper />, 
      text: "Resume",
      href: "/media/MingWang_Resume.pdf" 
    },
    { path: "/mw-portfolio/#/contact", icon: <FaEnvelope />, text: "Contact" },
    { 
      isExternal: true, 
      icon: <FaLinkedin />, 
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/ming-wang-b08485253/?trk=opento_sprofile_topcard" 
    },
    { 
      isExternal: true, 
      icon: <FaGithub />, 
      text: "Github",
      href: "https://github.com/Ming-Wang9"
    },
    { path: "/mw-portfolio/#/athletics", icon: <TbOlympics />, text: "Athletics" }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280); 
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Sidebar for larger screens */}
      {!isMobile && (
        <nav className={`sidebar ${currentThemeClass}`}>
          <div className="sidebar-logo">
            <Link to="/mw-portfolio">MW</Link>
          </div>
          <ul className="sidebar-links">
            {navItems.map((item, index) => (
              <li 
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.isResume || item.isExternal ? (
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.text}
                  >
                    {hoveredItem === index ? 
                      <span className="icon-text">{item.text}</span> : 
                      item.icon
                    }
                  </a>
                ) : (
                  <Link 
                    to={item.path} 
                    aria-label={item.text}
                  >
                    {hoveredItem === index ? 
                      <span className="icon-text">{item.text}</span> : 
                      item.icon
                    }
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Mobile Menu for small screens */}
      {isMobile && (
        <div className={`mobile-menu ${currentThemeClass}`}>
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Navigation menu"
          >
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          {isMenuOpen && (
            <div className="mobile-dropdown">
              {navItems.map((item, index) => (
                item.isResume || item.isExternal ? (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-link"
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className="mobile-link"
                  >
                    {item.text}
                  </Link>
                )
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
