import React, { useState, forwardRef } from 'react';
import './hero.styles.scss';
import CustomButton from '../custom-button/custom-button';
import Resume from '../Resume/Resume';
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
            href="https://drive.google.com/file/d/17oMBrDb2JYZKRUT5T2__yrKZtTt5MnHd/view?usp=sharing"
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
