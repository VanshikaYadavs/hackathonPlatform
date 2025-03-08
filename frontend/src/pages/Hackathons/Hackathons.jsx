import React from "react";
import "./Hackathon.css";

const events = [
  {
    title: "Code Kshetra2",
    description: "Where Geeks Battle with Code & Innovation!",
    rating: 4.6,
    date: "Feb 21 - 23, 2025",
    location: "New Delhi, India",
  },
  {
    title: "DUHacks 4.0",
    description: "Hustle Innovate Hack",
    rating: 4.1,
    date: "Feb 22 - 24, 2025",
    location: "Online",
  },
  {
    title: "ETHDenver 2025",
    description: "Largest and Longest Running #BUILDAthon in the World 🦄🐂🏔",
    rating: 3.7,
    date: "Feb 23 - Mar 1, 2025",
    location: "Denver, United States",
  },
];

const projects = [
  {
    title: "ChillQuest",
    description: "ChillQuest is an interactive multiplayer game...",
    likes: 154,
    image: "/p1.jpg",
    team: ["/avatar1.avif", "/avatar2.avif", "/avatar3.webp"],
  },
  {
    title: "LAP: Liquidity Auction Protocol",
    description: "Liquidity Auction Protocol, that uses ideals fund...",
    likes: 63,
    image: "/p1.jpg",
    team: ["/avatar1.avif", "/avatar2.avif"],
  },
  {
    title: "Matrix",
    description: "Learn new languages in a fun way",
    likes: 55,
    image: "/p1.jpg",
    team: ["/avatar3.webp", "/avatar1.avif", "/avatar2.avif"],
  },
  {
    title: "Retrace",
    description: "Reversing your transactions on the go!",
    likes: 53,
    image: "/p1.jpg",
    team: ["/avatar2.avif", "/avatar3.webp", "/avatar1.avif"],
  },
];

const Hackathons = () => {
  return (
    <div className="event-section">
      <div className="featured-event">
        <div className="event-banner">
          <img src="/img1.gif" alt="ETHDenver 2025" />
        </div>
        <div className="event-info">
          <h2>ETHDenver 2025</h2>
          <p>Largest and Longest Running #BUILDAthon in the World 🦄🐂🏔</p>
          <div className="event-actions">
            <span className="rating">⭐ 3.7</span>
            <button className="icon-btn">🔗</button>
            <button className="icon-btn">❌</button>
          </div>
          <div className="event-location">
            <span>HAPPENING</span>
            <p>Denver, United States</p>
          </div>
          <div className="event-status">
            <span>APPLICATIONS CLOSED</span>
            <p>Hackathon has ended</p>
          </div>
          <button className="projects-btn">See projects</button>
        </div>
      </div>

      <div className="event-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h2>{event.title}</h2>
            <p className="description">{event.description}</p>
            <div className="event-actions">
              <span className="rating">⭐ {event.rating}</span>
              <button className="icon-btn">🔗</button>
              <button className="icon-btn">❌</button>
            </div>
            <div className="event-details">
              <span>RUNS FROM</span>
              <p className="date">{event.date}</p>
              <span>HAPPENING</span>
              <p className="location">{event.location}</p>
            </div>
            <div className="event-status">
              <span>APPLICATIONS CLOSED</span>
              <p>Hackathon has ended</p>
            </div>
            <button className="projects-btn">See projects</button>
          </div>
        ))}
      </div>

      <div className="projects-section">
        <div className="projects-list">
          <h3 className="section-title">Projects Spotlight</h3>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="team-avatars">
                  {project.team.map((avatar, i) => (
                    <img key={i} src={avatar} alt="team member" className="avatar" />
                  ))}
                </div>
              </div>
              <div className="likes">❤️ {project.likes}</div>
            </div>
          ))}
        </div>
        <div className="quote-box">
          <blockquote>
            <p>"Solve the hardest problem first."</p>
            <span>- @devfolio</span>
          </blockquote>
          <button className="post-button">✖ Post</button>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
