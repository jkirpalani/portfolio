import React from 'react';
import './homepage.styles.css';
import CustomButton from '../components/custom-button/custom-button';
import Background from '../assets/images/vippng.com-robot-png-5143307.png';

const Homepage = () => (
  <div className="homepage">
    <div className="left-content-hero">
      <h1 className="hero-h1">Johnny Kirpalani</h1>
      <h2>Front End Engineer</h2>
      <div className="link-and-button-container">
        <CustomButton>Projects</CustomButton>
        <a href src="">
          Resume
        </a>
      </div>
    </div>

    <div
      className="background-image"
      style={{ backgroundImage: `url(${Background}` }}
    ></div>
  </div>
);
export default Homepage;
