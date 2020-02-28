import React, { forwardRef } from 'react';
import './hero.styles.css';
import CustomButton from '../custom-button/custom-button';
import HeroImg from '../../assets/images/img_hero.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = forwardRef((props, ref) => {
  return (
    <div className="hero" ref={ref}>
      <div className="left-content-hero" id="grid-item-1">
        <img
          src={HeroImg}
          ref={ref}
          className="background-image"
          id="grid-item-2"
          alt="spaceship"
        />
        <header className="hero-header">
          <h1 className="hero-h1">
            Hi, I'm <span className="highlight">Johnny Kirpalani</span>
          </h1>

          <h2 className="hero-h2">
            I'm a{' '}
            <span className="highlight">Full Stack Software Engineer</span> From
            NYC
          </h2>
        </header>

        <div className="link-and-button-container">
          <CustomButton id="hero-projects-button">
            View Projects
            <span>
              {'  '}
              <FontAwesomeIcon icon="rocket" className="fa-icon" />
            </span>
          </CustomButton>
          <CustomButton id="hero-resume-button">
            View Resume
            <span>
              {'  '}
              <FontAwesomeIcon icon="rocket" className="fa-icon" />
            </span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
});
export default Hero;
