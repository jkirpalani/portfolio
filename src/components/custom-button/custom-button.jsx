import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button fancy-button bg-gradient1" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
