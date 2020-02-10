import React, { useRef, useEffect } from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import './main.styles.css';
import { TweenMax, Power3 } from 'gsap';

import { useIntersection } from 'react-use';

const Main = () => {
  let spaceShipRef = useRef(null);
  let aboutRef = useRef(null);

  const intersection = useIntersection(aboutRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useEffect(() => {
    TweenMax.from(spaceShipRef, 1, {
      opacity: 0,
      duration: 1,
      y: -20,
      ease: Power3,
    });

    const fadeIn = element => {
      TweenMax.from(element, 1, {
        opacity: 0,
        duration: 1,
        y: -20,
        ease: Power3,
      });
    };

    const fadeOut = element => {
      TweenMax.from(element, 1, {
        opacity: 0,
        duration: 1,
        y: -20,
        ease: Power3,
      });
    };

    intersection && intersection.intersectionRatio < 0.5
      ? fadeOut('.fadeIn')
      : fadeIn('.fadeIn');
  }, []);

  return (
    <div className="main">
      <Hero
        ref={el => {
          spaceShipRef = el;
        }}
      />
      <About
        ref={el => {
          aboutRef = el;
        }}
      />
      <Projects />
      <Contact />
    </div>
  );
};
export default Main;
