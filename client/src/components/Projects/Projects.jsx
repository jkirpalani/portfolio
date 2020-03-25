import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Card from '../Card/Card';
import './Project.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  const [projects] = React.useState([
    {
      name: 'Event Hive',
      img: '../../assets/images/img_reducks_card.jpg',
      description:
        'Event-based social media app that connects users based on shared interests of upcoming events.',
      stack: ['React Native', 'Firebase/Firestore', 'Eventbrite API'],
      demourl:
        'https://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fvideoseries%3Flist%3DPLx0iOsdUOUmnZXS2H9EDbhYMlmh3onWHs&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5K37kXpwZ4g%26list%3DPLx0iOsdUOUmnZXS2H9EDbhYMlmh3onWHs%26index%3D7&amp;type=text%2Fhtml&amp;schema=youtube',
      githuburl: 'https://github.com/yoshis-yodelers/event-hive',
    },
    {
      name: 'ReDucks',
      img: '../../assets/images/img_macbook.png',
      description:
        'E-commerce website featuring rubber ducks to assist with Rubber Duck Debugging.',
      stack: ['React', 'Express', 'Material UI'],
      demourl: 'https://shielded-sands-80926.herokuapp.com/',
      githuburl: 'https://github.com/reducks-team/grace-shopper',
    },
    {
      name: 'Atlanta Helicopter Tours',
      img:
        'https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Booking website for a helicopter flight tours company in Atlanta. Built in 2017. I am currently redesigning/redeveloping this website.',
      stack: ['Wordpress', 'HTML', 'CSS'],
      demourl: 'http://atlantahelicoptertours.com/',
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
      } else {
        setIsVisible(true);
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
        <div className="card-stack">
          <div className="card-container">
            {projects.map((project, i) => (
              <Card project={project} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Projects;
