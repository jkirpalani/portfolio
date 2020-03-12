import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import Form from '../Form/form';
import CustomButton from '../custom-button/custom-button';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactImage1 from '../../assets/images/heic1808a.jpg';
import './contact.styles.css';

const Contact = props => {
  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  const [isVisible, setIsVisible] = useState(false);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setFormState({ name: '', email: '', message: '' });
  // };

  // const handleChange = event => {
  //   const { value, name } = event.target;
  //   setFormState({ [name]: value });
  // };

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
        console.log('intersecting', contactRef.current);
      } else {
        setIsVisible(true);
        console.log('intersecting', contactRef.current);
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
