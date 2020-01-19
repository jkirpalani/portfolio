import React from 'react';
import Card from '../card/Card';
import './project.styles.css';
import iphone from '../../assets/images/img_iphone.png';
import macbook from '../../assets/images/img_macbook.png';

const Projects = () => {
  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div className="card-container">
        <Card image={iphone} projectName="Event Hive" />
        <Card image={macbook} projectName="Dress Me" />
        <Card image={macbook} projectName="Dress Me" />
      </div>
    </div>
  );
};
export default Projects;
