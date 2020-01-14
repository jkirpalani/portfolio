import React from 'react';
import './card.styles.css';

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Avatar" />
      <div class="container">
        <h4>John Doe</h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};
export default Card;
