import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { ReactComponent as Logo } from '../../assets/logo.png';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      JK
    </Link>
    <div className="options">
      <Link className="option" to="/#about">
        <FontAwesomeIcon icon="user-astronaut" className="option-icon" />
        ABOUT
      </Link>
      <Link className="option" to="/#project-section">
        <FontAwesomeIcon icon="wrench" className="option-icon" />
        PROJECTS
      </Link>

      <Link className="option" to="/#contact">
        <FontAwesomeIcon icon="paper-plane" className="option-icon" />
        CONTACT
      </Link>

      <div className="option-separator">|</div>
      <a href className="nav-icon" to="">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href className="nav-icon" to="">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
    </div>
  </div>
);

export default Header;
