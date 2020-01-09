import React from 'react';
import './card.styles.css';
import cardImage from '../../assets/images/small-robot.png';

const Card = ({ projectName }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${cardImage}` }}
      ></div>

      <h3>{projectName}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        magnam nostrum natus corrupti mollitia. Qui!
      </p>
      <a href src="">
        Code
      </a>
      <a href src="">
        Website
      </a>
    </div>
  );
};
export default Card;
