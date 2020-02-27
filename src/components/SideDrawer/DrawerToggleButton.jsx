import React from 'react';
import './drawerToggleButton.css';

const DrawerToggleButton = ({ click }) => {
  return (
    <button className="toggle-button" onClick={click}>
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
    </button>
  );
};

export default DrawerToggleButton;
