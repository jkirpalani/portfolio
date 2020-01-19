import React from 'react';
import './homepage.styles.css';
import CustomButton from '../components/custom-button/custom-button';
import Background from '../assets/images/vippng.com-robot-png-5143307.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Homepage = () => (
  <div className="homepage">
    <div className="left-content-hero">
      <h2 className="hero-h2">Hello!</h2>

      <h1 className="hero-h1">
        My name is <span className="highlight">Johnny Kirpalani</span>.
      </h1>
      <h2 className="hero-h3">
        I'm a <span className="highlight">Full Stack Software Engineer </span>
        from NYC.
      </h2>
      <div className="link-and-button-container">
        <CustomButton>
          Explore My Projects
          <span>
            {'  '}
            <FontAwesomeIcon icon="rocket" className="nav-icon" />
          </span>
        </CustomButton>
        <a href src="" className="resume-link" pulse>
          View My Resume
          <span>
            {'  '}
            <FontAwesomeIcon icon="file" className="nav-icon" />
          </span>
        </a>
      </div>
    </div>

    <div
      className="background-image"
      style={{ backgroundImage: `url(${Background})` }}
    />
  </div>
);
export default Homepage;
