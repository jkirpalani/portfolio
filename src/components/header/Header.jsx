import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { ReactComponent as Logo } from '../../assets/logo.png';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      Johnny Kirpalani
    </Link>
    <div className="options">
      <Link className="option" to="/#project-section">
        <span>
          <FontAwesomeIcon icon="wrench" className="option-icon" /> PROJECTS
        </span>
      </Link>
      <Link className="option" to="/#about">
        <span>
          <FontAwesomeIcon icon="user-astronaut" className="option-icon" />{' '}
          ABOUT
        </span>
      </Link>
      <Link className="option" to="/#contact">
        <span>
          <FontAwesomeIcon icon="paper-plane" className="option-icon" /> CONTACT
        </span>
      </Link>
      <div>|</div>
      <a href className="icon" to="">
        <FontAwesomeIcon icon={['fab', 'github']} className="nav-icon" />
      </a>
      <a href className="icon" to="">
        <FontAwesomeIcon icon={['fab', 'linkedin']} className="nav-icon" />
      </a>
    </div>
  </div>
);

export default Header;
