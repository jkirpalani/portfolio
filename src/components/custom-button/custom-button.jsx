import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './custom-button.styles.scss';

const CustomButton = ({ children, to, ...otherProps }) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="custom-button fancy-button bg-gradient1"
    {...otherProps}
  >
    {children}
  </Link>
);

export default CustomButton;
