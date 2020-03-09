import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactImage1 from '../../assets/images/heic1808a.jpg';
import './contact.styles.css';

const Contact = props => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setFormState({ [name]: value });
  };

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
        <div className="form-box">
          <h2>
            <FontAwesomeIcon icon="paper-plane" className="option-icon" />
            LET'S CONNECT
          </h2>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form-inline">
              <FormInput
                name="name"
                type="email"
                value={formState.name}
                handleChange={handleChange}
                label="Your Name"
                className="form-input"
                required
              />
              <FormInput
                name="email"
                type="email"
                value={formState.email}
                handleChange={handleChange}
                label="Your Email Address"
                className="form-input"
                required
              />
              <FormInput
                name="message"
                type="text"
                value={formState.message}
                handleChange={handleChange}
                label="Your Message"
                className="form-input form-input-message"
                required
              />
              <CustomButton type="submit">
                <span>Submit</span>
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
