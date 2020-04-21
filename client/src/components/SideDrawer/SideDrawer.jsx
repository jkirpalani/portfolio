import * as React from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import './SideDrawer.styles.css';

const backgroundVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

const SideDrawer = ({ isOpen, handleToggle }) => {
  // const [isOpen, setOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <motion.nav
      className="sidedrawer"
      ref={containerRef}
      initial={'closed'}
      animate={isOpen ? 'open' : 'closed'}
      isOpen={isOpen}
    >
      <motion.div
        className="background"
        variants={backgroundVariants}
        isOpen={isOpen}
        animate={isOpen ? 'open' : 'closed'}
      />
      <Navigation isOpen={isOpen} handleToggle={handleToggle} />
    </motion.nav>
  );
};

export default SideDrawer;
