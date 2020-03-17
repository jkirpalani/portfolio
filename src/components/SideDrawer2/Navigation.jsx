import * as React from 'react';
import { motion, Variants } from 'framer-motion';
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

export const Navigation = props => {
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
        <motion.ul variants={variants} className="menu-items">
          {menuLinks.map(({ name, url }, i) => (
            <MenuItem key={i} name={name} url={url} />
          ))}
        </motion.ul>
      </div>
      <motion.div
        className="side-drawer-horizontal-divider"
        variants={variants}
      />
      <div className="menu-icons-container">
        <motion.ul variants={variants} className="menu-icons">
          {menuIcons.map(({ name, url }, i) => (
            <MenuIcon key={i} alt={name} url={url} icon={name} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
