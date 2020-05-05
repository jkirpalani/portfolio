import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { MenuIcon } from './MenuIcon';

const variants = {
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const Navigation = ({ isOpen, handleToggle }) => {
  const menuLinks = [
    {
      name: 'About',
      url: 'about',
    },
    {
      name: 'Projects',
      url: 'project-section',
    },
    {
      name: 'Contact Me',
      url: 'contact',
    },
  ];

  const menuIcons = [
    {
      name: 'github',
      url: 'https://github.com/jkirpalani',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/johnny-kirpalani',
    },
  ];

  return (
    <div className="navigation-container">
      <div className="menu-items-container">
        <motion.ul
          variants={variants}
          className="menu-items"
          isOpen={isOpen}
          initial={'closed'}
          animate={isOpen ? 'open' : 'closed'}
        >
          {menuLinks.map(({ name, url }, i) => (
            <MenuItem
              handleToggle={handleToggle}
              key={i}
              name={name}
              url={url}
              isOpen={isOpen}
              initial={'open'}
              animate={isOpen ? 'open' : 'closed'}
            />
          ))}
        </motion.ul>
      </div>

      <div className="menu-icons-container">
        <motion.ul
          variants={variants}
          className="menu-icons"
          isOpen={isOpen}
          initial={'open'}
          animate={isOpen ? 'open' : 'closed'}
        >
          {menuIcons.map(({ name, url, handleToggle }, i) => (
            <MenuIcon
              handleToggle={handleToggle}
              key={i}
              alt={name}
              url={url}
              icon={name}
              // isOpen={isOpen}
              // initial={'closed'}
              // animate={isOpen ? 'open' : 'closed'}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
