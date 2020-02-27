import React from 'react';
import CloserDrawerButtom from './CloseDrawerButton';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidedrawer.styles.css';
import CloseDrawerButton from './CloseDrawerButton';

const SideDrawer = ({ show, close, click }) => {
  let drawerClasses = 'side-drawer';

  if (show) {
    drawerClasses = 'side-drawer open';
  } else {
    drawerClasses = 'side-drawer';
  }

  return (
    <nav className={drawerClasses}>
      <CloseDrawerButton click={close} />
      <div className="navbar-toggle-button"></div>
      <div className="navbar-logo">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={200}
          onClick={click}
        >
          JK
        </Link>
      </div>
      <div className="side-drawer-links">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              onClick={click}
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
              duration={200}
              onClick={click}
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
              duration={200}
              onClick={click}
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
              duration={200}
              onClick={click}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
      <div className="side-drawer-icon-container">
        <ul className="side-drawer-icons">
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
