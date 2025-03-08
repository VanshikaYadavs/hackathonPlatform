import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner Section with Image */}
      <div className="about-hero-container">
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">Our Journey Begins Here</h1>
          <p className="about-hero-subtitle">
            Explore our mission, values, and the impact we strive to create.
          </p>
        </div>
      </div>

      {/* About Content Sections */}
      <section className="hero">
        <h1>Elevate Your Brand with a Captivating 'About' Page</h1>
        <p>
          Capture the essence of your journey with a custom 'About' page that
          showcases your brand story and values. Engage your audience with
          compelling narratives that establish trust and highlight your unique
          mission and vision.
        </p>
        <button className="cta-button">Connect with Us</button>
      </section>

      <section className="brand-story">
        <h2>Crafting Your Story for Enhanced Connections</h2>
        <div className="story-cards">
          <div className="card">
            <h3>Showcasing Your Brand's Journey</h3>
            <p>Share the milestones of your company...</p>
          </div>
          <div className="card">
            <h3>Building Trust with Authentic Stories</h3>
            <p>Empower visitors by revealing your story...</p>
          </div>
          <div className="card">
            <h3>Inviting Partnerships for Growth</h3>
            <p>By articulating your goals and shared success...</p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <h2>About Our Journey</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <h3>Our Mission & Vision</h3>
            <p>We strive to provide innovative solutions...</p>
          </div>
          <div className="mission-card">
            <h3>Our Story</h3>
            <p>Our journey is marked by a commitment to excellence...</p>
          </div>
          <div className="mission-card">
            <h3>Our Expertise</h3>
            <p>We leverage years of experience to craft strategies...</p>
          </div>
          <div className="mission-card">
            <h3>Our Team</h3>
            <p>Our dedicated team brings diverse skills...</p>
          </div>
        </div>
      </section>

      <section className="engagement">
        <h2>Our Story and Mission</h2>
        <p>Discover the transformative journey behind our brand...</p>
        <ul>
          <li>✔️ Crafted Narrative</li>
          <li>✔️ Building Connections</li>
          <li>✔️ Expertise Highlight</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
