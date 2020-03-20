import * as React from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import './SideDrawer.styles.css';

const backgroundVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const SideDrawer = () => {
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <motion.nav
      className="sidedrawer"
      ref={containerRef}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div className="background" variants={backgroundVariants} />
      <Navigation />
      <MenuToggle toggle={() => setOpen(!isOpen)} />
    </motion.nav>
  );
};

export default SideDrawer;
