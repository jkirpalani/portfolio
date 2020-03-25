import React from 'react';
import './Backdrop.styles.css';

const Backdrop = ({ click }) => (
  <div className="backdrop" onClick={click}></div>
);

export default Backdrop;
