import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  buttonType,
  buttonOrLink,
  to,
  url,
  ...otherProps
}) => {
  const renderSwitch = type => {
    switch (type) {
      case 'anchor':
        return (
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
      case 'external':
        return (
          <a
            href={url}
            className="custom-button fancy-button bg-gradient1"
            target="_blank"
            {...otherProps}
          >
            {children}
          </a>
        );
      case 'submit':
        return (
          <button
            className="custom-button fancy-button bg-gradient1"
            {...otherProps}
          >
            {children}
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderSwitch(buttonType)}
      {/* {buttonOrLink === 'button' ? (
        <button
          className="custom-button fancy-button bg-gradient1"
          {...otherProps}
        >
          {children}
        </button>
      ) : (
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
      )} */}
    </div>
  );
};

export default CustomButton;
