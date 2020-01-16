import React from 'react';
import './card.styles.scss';

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Avatar" />
      <h4>John Doe</h4>
      <p>Architect & Engineer</p>
    </div>
  );
};
export default Card;
