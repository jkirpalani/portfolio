import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/logo.png';
import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/"></Link>
    <div className="options">
      <Link className="option" to="/#project-section">
        PROJECTS
      </Link>
      <Link className="option" to="/#about">
        ABOUT
      </Link>
      <Link className="option" to="/#contact">
        CONTACT
      </Link>
      <Link className="option" to="/#toolbox">
        TOOLBOX
      </Link>
    </div>
  </div>
);

export default Header;
