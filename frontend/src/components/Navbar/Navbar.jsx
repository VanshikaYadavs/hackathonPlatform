import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginPopup from '../LoginPopup/LoginPopup'; // Import LoginPopup
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State for login popup

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="/logo.png" alt="CrazyHack Logo" className="navbar-logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links">
              <Link to="/hackathons" className="nav-link">Hackathons</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              <Link to="/organize" className="nav-link">Organize a Hackathon</Link>
            </div>

            {/* Authentication Buttons */}
            <div className="auth-buttons">
              <button className="btn btn-secondary" onClick={() => setShowLogin(true)}>Login</button>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? "✖" : "☰"}
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-links">
            <Link to="/hackathons" className="mobile-nav-link" onClick={toggleMobileMenu}>Hackathons</Link>
            <Link to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</Link>
            <Link to="/blog" className="mobile-nav-link" onClick={toggleMobileMenu}>Blog</Link>
            <Link to="/organize" className="mobile-nav-link" onClick={toggleMobileMenu}>Organize a Hackathon</Link>
            <button className="mobile-nav-link" onClick={() => { toggleMobileMenu(); setShowLogin(true); }}>Login</button>
          </div>
        </div>
      </header>

      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </>
  );
};

export default Navbar;
