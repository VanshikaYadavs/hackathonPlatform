import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
          <h1>CrazyHack</h1> {/* Changed logo to text-based */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi dolores asperiores exercitationem aliquid repellendus! Illum ratione, consectetur 
            culpa totam neque nisi animi hic error facilis aspernatur voluptates impedit nobis quisquam.</p>
          <div className='footer-social-icons'>
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-345-1234</li>
            <li>CrazyHack@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2024 @ CrazyHack.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
