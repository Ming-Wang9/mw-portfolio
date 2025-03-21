import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";
import { TbOlympics } from "react-icons/tb";  
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const location = useLocation();

  const pageThemes = {
    '/': { className: 'sidebar-home', bgColor: '#000000' }, // Home page theme
    '/about': { className: 'sidebar-about', bgColor: '#f68d3d' }, // About page theme
    '/contact': { className: 'sidebar-contact', bgColor: '#377494' }, // Contact page theme
    '/athletics': { className: 'sidebar-athletics', bgColor: '#e74c3c' } // Athletics page theme
  };

  const currentTheme = pageThemes[location.pathname] || pageThemes['/'];
  const currentThemeClass = currentTheme.className;
  const currentBgColor = currentTheme.bgColor;

  // Dynamically determine the logo based on the current route
  const getLogoForPage = () => {
    const page = location.pathname.slice(1); // Remove the leading slash
    const logoName = page ? `${page}_logo.png` : 'home_logo.png'; // Default to home_logo.png for the root path
    return `/media/${logoName}`; // Path to the logo in the public/media folder
  };

  const navItems = [
    { path: "/", icon: <FaHome />, text: "Home" },
    { path: "/about", icon: <FaUser />, text: "About" },
    // { 
    //   isResume: true, 
    //   icon: <FaNewspaper />, 
    //   text: "Resume",
    //   href: "/media/MingWang_Resume.pdf" 
    // },
    { path: "/contact", icon: <FaEnvelope />, text: "Contact" },
    { 
      isExternal: true, 
      icon: <FaLinkedin />, 
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/ming-wang-b08485253/" 
    },
    { 
      isExternal: true, 
      icon: <FaGithub />, 
      text: "Github",
      href: "https://github.com/Ming-Wang9"
    },
    { path: "/athletics", icon: <TbOlympics />, text: "Athletics" }
  ];

  // Check if the screen is not in full-screen mode
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280); 
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simulate loading for 1.5 seconds (duration of the spin animation)
  useEffect(() => {
    // Only show loading for internal pages (not external links)
    if (!navItems.some(item => item.isExternal && location.pathname === item.path)) {
      const timer = setTimeout(() => {
        setIsLoading(false); // Stop loading after 1.5 seconds
      }, 1500); // 1.5 seconds
  
      return () => clearTimeout(timer); // Cleanup timer
    } else {
      setIsLoading(false); // Immediately stop loading for external links
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // Disable the warning for navItems

  // Handle link clicks (force page reload for internal pages)
  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      // If already on the same page, force a reload
      window.location.reload();
    } else {
      // Navigate to the new page
      window.location.href = path;
    }
  };

  return (
    <>
      {/* Loading overlay (only for internal pages) */}
      {isLoading && !navItems.some(item => item.isExternal && location.pathname === item.path) && (
        <div 
          className="loading-overlay" 
          style={{ backgroundColor: currentBgColor }} // Set background color dynamically
        >
          <div className="loading-spinner">
            <img 
              src={getLogoForPage()} 
              alt="Loading Logo" 
              className="spinning-logo" 
            />
          </div>
        </div>
      )}

      {/* Sidebar for larger screens */}
      <nav className={`sidebar ${currentThemeClass}`}>
        <div className={`sidebar-logo ${location.pathname === '/' ? 'home-logo' : ''}`}>
          <Link 
            to="/" 
            onClick={() => handleLinkClick("/")} // Handle logo click
          >
            <img 
              src={getLogoForPage()} 
              alt="Logo" 
              className="logo-image" 
            />
          </Link>
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
                  onClick={() => handleLinkClick(item.path)}
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

      {/* Page content */}
      <div className={`page-content ${isLoading ? 'hidden' : 'visible'}`}>
        {/* Mobile Menu for small screens */}
        {isMobile && (
          <div className={`mobile-menu ${currentThemeClass}`}>
            <button 
              className={`menu-toggle ${currentThemeClass}`} 
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
              <div className={`mobile-dropdown ${currentThemeClass}`}>
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
                      onClick={() => handleLinkClick(item.path)}
                    >
                      {item.text}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;