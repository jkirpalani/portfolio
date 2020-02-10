import React, { useRef } from 'react';
import './hero.styles.css';
import CustomButton from '../custom-button/custom-button';
import HeroImg from '../../assets/images/img_hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = React.forwardRef((props, ref) => {
  return (
    <div className="hero">
      <div className="left-content-hero">
        <h2 className="hero-h2">
          Hello <span>🖖</span>
        </h2>

        <h1 className="hero-h1">
          My Name Is <span className="highlight">Johnny Kirpalani</span>
        </h1>
        <h3 className="hero-h3">
          I'm a <span className="highlight">Full Stack Software Engineer </span>
          From NYC
        </h3>
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
        ref={ref}
        className="background-image"
        style={{ backgroundImage: `url(${HeroImg})` }}
      ></div>
    </div>
  );
});
export default Hero;
