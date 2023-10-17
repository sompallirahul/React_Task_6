// Portfolio.js
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Sompalli Rahul</h1>
        <p>Web Developer</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate web developer with a strong focus on creating responsive and user-friendly web applications.
        </p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Developed a code that gives registered state of a phone number.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Developed rock-paper-scissors game which you can play with computer.</p>
        </div>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>You can reach me at rahulsompalli07@gmail.com</p>
      </section>
    </div>
  );
};

export default Portfolio;
