import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ name, url, handleToggle }) => {
  return (
    <motion.li
      variants={variants.closed}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        activeClass="active"
        to={url}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={handleToggle}
      >
        {name}
      </Link>
    </motion.li>
  );
};
