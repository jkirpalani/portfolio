import React from 'react';
import './card.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ project }) => {
  return (
    <div class="card">
      <h3 class="title">{project.name}</h3>
      <div class="project-description">{project.description}</div>
      <div class="stack-list">
        <ul>
          {project.stack.map(e => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
      <div className="hover-links">
        <ul>
          <li>
            <a href={project.githuburl}>
              Demo
              <FontAwesomeIcon icon={project.wrench} className="option-icon" />
            </a>
          </li>
          <li>
            <a href={project.githuburl}>Github URL</a>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};
export default Card;
