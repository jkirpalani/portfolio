import React from 'react';
import './Footer.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
      <span>
        Made with <FontAwesomeIcon icon="heart" className="option-icon" />
        using
        <FontAwesomeIcon icon={['fab', 'react']} className="fa-icon" />
        by Johnny Kirpalani
      </span>
    </div>
  );
};

export default Footer;
