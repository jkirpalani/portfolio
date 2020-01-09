import React from 'react';
import Card from '../card/Card';
import './project.styles.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <Card projectName="Event Hive" />
      <Card projectName="Dress Me" />
    </div>
  );
};
export default Projects;
