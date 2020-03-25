import React, { useState } from 'react';
import Form from '../Form/Form';
import { motion } from 'framer-motion';
import contactImage1 from '../../assets/images/img_contact-section.jpg';
import './Contact.styles.css';

const Contact = props => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = React.useRef();
  const variants = {
    open: {
      opacity: 1,
    },
    closed: { opacity: 0 },
  };

  React.useEffect(() => {
    const contactObserverOptions = {
      threshold: 0.3,
    };

    const contactObserver = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }, contactObserverOptions);

    contactObserver.observe(contactRef.current);
    return () => contactObserver.disconnect(); // cleanup
  }, []);

  return (
    <motion.div animate={isVisible ? 'open' : 'closed'} variants={variants}>
      <div
        className="contact contact-image"
        style={{ backgroundImage: `url(${contactImage1})` }}
        ref={contactRef}
      >
        <Form />
      </div>
    </motion.div>
  );
};

export default Contact;
