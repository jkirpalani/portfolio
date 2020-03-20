import React from 'react';
import './Card.styles.scss';

const Card = ({ project }) => {
  const { demourl, githuburl } = project;

  return (
    <div className="card">
      <h3 className="title">{project.name}</h3>
      <div className="project-description">{project.description}</div>
      <div className="stack-list">
        <ul>
          {project.stack.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
      <div className="hover-links">
        <ul>
          {demourl && (
            <li>
              <a href={project.demourl}>Demo</a>
            </li>
          )}
          {githuburl && (
            <li>
              <a href={project.githuburl}>Github</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Card;
