import React from 'react';
import './homepage.styles.css';
import CustomButton from '../components/custom-button/custom-button';
import HeroImg from '../assets/images/img_hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Homepage = () => (
  <div className="homepage">
    <div className="left-content-hero">
      <h2 className="hero-h2">Hello.</h2>

      <h1 className="hero-h1">
        My Name Is <span className="highlight">Johnny Kirpalani</span>.
      </h1>
      <h2 className="hero-h3">
        I'm a <span className="highlight">Full Stack Software Engineer </span>
        From NYC.
      </h2>
      <div className="link-and-button-container">
        <CustomButton>
          Explore My Projects
          <span>
            {'  '}
            <FontAwesomeIcon icon="rocket" className="fa-icon" />
          </span>
        </CustomButton>
        <a href src="" className="resume-link" pulse>
          View My Resume
          <span>
            {'  '}
            <FontAwesomeIcon icon="file" className="fa-icon" />
          </span>
        </a>
      </div>
    </div>

    <div
      className="background-image"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {' '}
    </div>
  </div>
);
export default Homepage;
