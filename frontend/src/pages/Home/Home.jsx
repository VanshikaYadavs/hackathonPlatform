// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaPuzzlePiece, FaMedal, FaLightbulb } from 'react-icons/fa';
import './Home.css';


const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Solve Real Problems, Get Rewarded</h1>
            <p>
              Join our community of innovators where companies post real-world challenges 
              and developers like you create solutions that matter.
            </p>
            <div className="hero-buttons">
              <Link to="/challenges" className="btn btn-primary">Explore Challenges</Link>
              <Link to="/register" className="btn btn-outline">Join Community</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/hero-image.svg" alt="Innovation Hub" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Our platform connects innovative companies with talented developers</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaPuzzlePiece />
            </div>
            <h3>Continuous Challenges</h3>
            <p>Companies post real-world problems that need innovative solutions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaRocket />
            </div>
            <h3>Submit Solutions</h3>
            <p>Developers build and submit their solutions individually or as teams</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaMedal />
            </div>
            <h3>Token Rewards</h3>
            <p>Earn tokens for winning solutions that can be converted to real money</p>
          </div>
        </div>
      </section>

      <section className="challenges-preview">
        <div className="section-title">
          <h2>Featured Challenges</h2>
          <p>Check out these highlighted challenges from our innovative partner companies</p>
        </div>
        <div className="challenge-cards">
          {/* Challenge cards would be dynamically generated from API data */}
          <div className="challenge-card">
            <div className="challenge-status">Active</div>
            <div className="challenge-content">
              <div className="challenge-company">
                <div className="company-logo"></div>
                <span>TechCorp</span>
              </div>
              <h3>AI-Powered Customer Service Chatbot</h3>
              <p>Create an intelligent chatbot that can handle customer service inquiries for an e-commerce platform.</p>
              <div className="challenge-meta">
                <span>14 days left</span>
                <div className="tokens">2500 tokens</div>
              </div>
            </div>
          </div>
          {/* More challenge cards */}
        </div>
        <div className="see-more">
          <Link to="/challenges" className="btn btn-outline">View All Challenges</Link>
        </div>
      </section>

      <section className="incubator-preview">
        <div className="incubator-content">
          <div className="incubator-text">
            <h2>Open-Source Project Incubator</h2>
            <p>
              Winning solutions get a chance to be developed into full-fledged open-source projects 
              with mentorship, resources, and additional funding.
            </p>
            <Link to="/incubator" className="btn btn-primary">Learn More</Link>
          </div>
          <div className="incubator-image">
            <img src="/images/incubator.svg" alt="Project Incubator" />
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Innovate?</h2>
        <p>Join our community of problem-solvers and start earning rewards for your creativity and skills.</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn btn-light">Get Started</Link>
          <Link to="/challenges" className="btn btn-outline-light">Browse Challenges</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
/*// pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <h1>Solve Real-World Problems, Get Rewarded</h1>
          <p>Join our community of innovators tackling challenges from top companies. Earn tokens, build your portfolio, and turn great ideas into real projects.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Browse Challenges</button>
            <button className="btn btn-secondary">Post a Challenge</button>
          </div>
        </div>
      </section>
      {/*Rest of the home page content }
    </div>
  );
};

export default Home;*/