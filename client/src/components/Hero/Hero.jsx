import React, { forwardRef } from 'react';
import './Hero.styles.scss';
import CustomButton from '../Custom-Button/Custom-Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroSVG from '../HeroSVG/HeroSVG';

const Hero = forwardRef((props, ref) => {
  return (
    <div className="hero" ref={ref}>
      <div className="left-content-hero" id="grid-item-1">
        <HeroSVG />

        <header className="hero-header">
          <h1 className="hero-h1">
            Hi, I'm <span className="highlight">Johnny Kirpalani, </span>
          </h1>

          <h2 className="hero-h2">
            and I'm a{' '}
            <span className="highlight">Full Stack Software Engineer</span> From
            NYC
          </h2>
        </header>

        <div className="link-and-button-container">
          <CustomButton
            id="hero-projects-button"
            to="project-section"
            buttonType="anchor"
          >
            <span>
              Projects
              <FontAwesomeIcon icon="rocket" className="fa-icon" />
            </span>
          </CustomButton>
          <CustomButton
            id="hero-resume-button"
            buttonType="external"
            href="https://drive.google.com/file/d/1i9T1aOUoLPdvhesT1rQTAdA9tJ-2R8PS/view?usp=sharing"
          >
            <span>
              Resume
              <FontAwesomeIcon icon="rocket" className="fa-icon" />
            </span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
});
export default Hero;
