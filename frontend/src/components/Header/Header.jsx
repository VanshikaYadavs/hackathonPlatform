import React from 'react';
import './Header.css'; // We'll create this CSS file next

const Header = () => {
  return (
    <div className="hero-container">
      {/* The image will be added as a background in CSS */}
      <div className="hero-overlay">
        <h1 className="hero-title">CRAZY HACK</h1>
        <p className="hero-subtitle">
          <strong>Hack it till you make it! Where code meets chaos & innovation rules!......</strong>
        </p>
      </div> 
    </div>
  );
};

export default Header; 