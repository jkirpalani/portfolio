import React from 'react';
import Card from './Card';
import './Card2.styles.scss';

const Card2 = ({ projects }) => {
  return (
    <div class="container">
      {projects.map(project => (
        <Card project={project} />
      ))}
    </div>
  );
};

export default Card2;
