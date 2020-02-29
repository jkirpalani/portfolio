import React, { useRef, useEffect } from 'react';
// import { ReactComponent as JavascriptLogo } from '../../assets/images/icon_javascript.svg';
// import { ReactComponent as ReactLogo } from '../../assets/images/icon_react.svg';
// import { ReactComponent as NodeLogo } from '../../assets/images/icon_node.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.styles.css';

const About = React.forwardRef((props, ref) => {
  return (
    <div className="about">
      <h2 className="fadeIn">
        <FontAwesomeIcon icon="user-astronaut" className="option-icon" /> ABOUT
        ME
      </h2>
      <div ref={ref} className="paragraph-container fadeIn">
        <p>
          After working in Sales for several years, my passion for problem
          solving and building useful things facilitated my journey into web
          development. My journey began with building Wordpress-based websites
          as a hobby, which led to word-of-mouth referrals for freelance web
          development contracts. After the successful completion of these
          projects (and having a blast the entire time), I took the leap and
          enrolled in Fullstack Academy's Software Engineering Immersive
          Program, where I cultivated my technical and collaborative skills
          through building full stack projects using Agile methodologies.
        </p>
        <br />
        <p>
          I am eager to contribute my skills as a developer to innovative
          platforms and products.
        </p>
        <br />
        <p>
          My interests include photography, hiking, camping, fitness,
          meditation, and drinking copious amounts of tea while reading science
          fiction.
        </p>

        <div className="logo-group fadeIn">
          <FontAwesomeIcon icon={['fab', 'js']} className="fa-icon" />
          <FontAwesomeIcon icon={['fab', 'node']} className="fa-icon" />
          <FontAwesomeIcon icon={['fab', 'react']} className="fa-icon" />
          {/* <JavascriptLogo className="javascript-logo" id="logo" />
        <NodeLogo className="node-logo" id="logo" />
        <ReactLogo className="react-logo" id="logo" /> */}
        </div>
      </div>
    </div>
  );
});

export default About;
