import * as React from 'react';
import { motion } from 'framer-motion';
import './menuToggle.styles.scss';

export const MenuToggle = ({ isOpen, handleToggle }) => {
  const Path = (props) => {
    return (
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="white"
        strokeLinecap="round"
        animate={isOpen ? 'open' : 'closed'}
        initial={'open'}
        {...props}
      />
    );
  };

  return (
    <button onClick={handleToggle} className="side-drawer-button">
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
};
