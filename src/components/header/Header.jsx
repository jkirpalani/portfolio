import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.styles.css';

const Header = ({ appendClass }) => {
  console.log('is append true', appendClass);

  return (
    <div className={`header${appendClass ? ' nav-scrolled' : ''}`}>
      <h1 className="logo">
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
      </h1>
      <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
      <nav>
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
              <FontAwesomeIcon icon="user-astronaut" className="option-icon" />
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
              <FontAwesomeIcon icon="wrench" className="option-icon" />
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
              <FontAwesomeIcon icon="paper-plane" className="option-icon" />
              Contact Me
            </Link>
          </li>
          <li>
            <div className="option-separator">|</div>
          </li>

          <li>
            <a href className="nav-icon" to="">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </li>

          <li>
            <a href className="nav-icon" to="">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </div>
  );
};
export default Header;
