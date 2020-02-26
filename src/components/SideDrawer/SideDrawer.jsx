import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidedrawer.styles.css';

const SideDrawer = ({ show }) => {
  let drawerClasses = 'side-drawer';
  if (show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <div className="navbar-toggle-button">
        {/* <DrawerToggleButton click={drawerClickHander} /> */}
      </div>
      <div className="navbar-logo">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          JK
        </Link>
      </div>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Me
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Resume
          </Link>
        </li>
      </ul>
      <div className="side-drawer-icon-container">
        <ul>
          <li>
            <a href="#" alt="github">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </li>
          <li>
            <a href="#" alt="linkedin">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer;
