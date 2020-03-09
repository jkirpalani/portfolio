import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = React.useRef();

  const variants = {
    open: {
      opacity: 1,
    },
    closed: { opacity: 0 },
  };

  React.useEffect(() => {
    const projectObserverOptions = {
      threshold: 0.3,
    };

    const projectObserver = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        setIsVisible(false);
        console.log('intersecting', projectsRef.current);
      } else {
        setIsVisible(true);
        console.log('intersecting', projectsRef.current);
      }
    }, projectObserverOptions);

    projectObserver.observe(projectsRef.current);
    return () => projectObserver.disconnect();
  }, []);

  return (
    <motion.div animate={isVisible ? 'open' : 'closed'} variants={variants}>
      <div className="project-section" ref={projectsRef}>
        <h2>
          <FontAwesomeIcon icon="wrench" className="option-icon" />
          PROJECTS
        </h2>
        <div className="card-container">
          <Card2 projects={projects} />
        </div>
      </div>
    </motion.div>
  );
};
export default Projects;
