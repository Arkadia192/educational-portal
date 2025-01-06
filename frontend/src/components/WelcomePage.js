import React from "react";
import "./WelcomePage.css"; // Include the styles from below

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-heading">Welcome!</h1>
        <p className="welcome-description">
          Hello, I'm Berk, a passionate software engineer with experience in
          backend development and full-stack applications. This is the showcase
          of the case-study you have given me. I hope you like it!
        </p>
        <div className="links-container">
          <a href="Departments" className="link-button">
            Departments
          </a>
          <a href="Courses" className="link-button">
            Courses
          </a>
        </div>
        <p className="footer-text">
          <a
            href="https://github.com/Arkadia192/educational-portal" // Replace with your GitHub link
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            This project on GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
