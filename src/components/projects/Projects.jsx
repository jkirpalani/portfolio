import React from 'react';
import Card2 from '../card/Card2';
import './project.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  const [projects] = React.useState([
    {
      name: 'ReDucks',
      img: '../../assets/images/img_reducks_card.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus itaque ',
      stack: ['React', 'Express', 'Node'],
      icon: 'wrench',

      demourl: 'https://shielded-sands-80926.herokuapp.com/',
      githuburl: 'https://github.com/reducks-team/grace-shopper',
    },
    {
      name: 'ReDucks',
      img: '../../assets/images/img_macbook.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus itaque ',
      stack: ['React', 'Express', 'Node'],
      icon: '',
      demourl: 'https://github.com',
      githuburl: 'https://github.com',
    },
    {
      name: 'ReDucks',
      img:
        'https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus itaque ',
      stack: ['React', 'Express', 'Node'],
      icon: '',
      demourl: '',
      githuburl: '',
    },
  ]);

  return (
    <div className="project-section">
      <h2>
        <FontAwesomeIcon icon="wrench" className="option-icon" />
        PROJECTS
      </h2>
      <div className="card-container">
        <Card2 projects={projects} />
        {/* <Card image={iphone} projectName="Event Hive" />
        <Card image={iphone} projectName="Dress Me" />
        <Card image={iphone} projectName="Dress Me" /> */}
      </div>
    </div>
  );
};
export default Projects;
