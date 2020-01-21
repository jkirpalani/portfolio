import React from 'react';
// import { ReactComponent as JavascriptLogo } from '../../assets/images/icon_javascript.svg';
// import { ReactComponent as ReactLogo } from '../../assets/images/icon_react.svg';
// import { ReactComponent as NodeLogo } from '../../assets/images/icon_node.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './about.styles.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="paragraphs">
        <p>
          As a technology enthusiast coming from Sales and Customer Service
          roles within the Banking, Real Estate and Wholesale industries, I
          sought to transition into a field that leveraged my relationship
          building ability with my passion for solving complex problems. After
          working with Software Developers at BitBot, I began building
          Wordpress-based websites as a hobby. While I enjoyed building these
          websites for friends and relatives, I felt that I was not sufficiently
          challenging myself. I desired more control over the development
          process and I wanted to produce websites with advanced functionality.
        </p>{' '}
        <p>
          After extensive research, I began teaching myself Javascript and
          eventually enrolled at Fullstack Academy, where I deepened my
          knowledge of Javascript and gained proficiency in React, Node.js.,
          Redux, Express, Sequelize, and other technologies. I’m presently a
          full stack developer specializing in Javascript. I'm now looking for
          work for an organization where I can help solve interesting technical
          challenges.
        </p>
      </div>

      <div className="logo-group">
        <FontAwesomeIcon icon={['fab', 'js']} className="fa-icon" />
        <FontAwesomeIcon icon={['fab', 'node']} className="fa-icon" />
        <FontAwesomeIcon icon={['fab', 'react']} className="fa-icon" />
        {/* <JavascriptLogo className="javascript-logo" id="logo" />
        <NodeLogo className="node-logo" id="logo" />
        <ReactLogo className="react-logo" id="logo" /> */}
      </div>
    </div>
  );
};

export default About;
