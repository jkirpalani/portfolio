import React from 'react';
import './CloseDrawerButton.styles.css';

const CloseDrawerButton = ({ click }) => {
  return (
    <div className="close-drawer-button" onClick={click}>
      X
    </div>
  );
};

export default CloseDrawerButton;
