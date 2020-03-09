import React, { useState, forwardRef } from 'react';
import './hero.styles.scss';
import CustomButton from '../custom-button/custom-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import HeroSVG from '../HeroSVG/HeroSVG';

const Hero = forwardRef((props, ref) => {
  return (
    <div className="hero" ref={ref}>
      <div className="left-content-hero" id="grid-item-1">
        <HeroSVG />

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
          <CustomButton id="hero-projects-button" to="project-section">
            <span>
              Projects
              <FontAwesomeIcon icon="rocket" className="fa-icon" />
            </span>
          </CustomButton>
          <CustomButton id="hero-resume-button">
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
