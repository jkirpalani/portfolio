import React from 'react';
import { ReactComponent as JavascriptLogo } from '../../assets/images/icon_javascript.svg';
import { ReactComponent as ReactLogo } from '../../assets/images/icon_react.svg';
import { ReactComponent as NodeLogo } from '../../assets/images/icon_node.svg';

import './about.styles.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Necessitatibus, adipisci aspernatur dicta voluptas commodi voluptate
        iste voluptatem dolore quo distinctio voluptates odit maxime, explicabo
        odio quaerat praesentium nisi error laborum?
      </p>
      <div className="logo-group">
        <JavascriptLogo className="javascript-logo" />
        <NodeLogo className="node-logo" />
        <ReactLogo className="react-logo" />
      </div>
    </div>
  );
};

export default About;
