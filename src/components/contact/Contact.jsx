import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactImage from '../../assets/images/img_contact-section.jpg';

// import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './contact.styles.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ name: '', email: '', message: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div
        className="contact"
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <h2> Let's Connect </h2>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <FormInput
            name="name"
            type="email"
            value={this.state.name}
            handleChange={this.handleChange}
            label="Your Name"
            className="form-input"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Your Email Address"
            className="form-input"
            required
          />
          <FormInput
            name="message"
            type="text"
            value={this.state.message}
            handleChange={this.handleChange}
            label="Your Message"
            className="form-input"
            required
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>

        {/* <span>
          Github
          <FontAwesomeIcon icon={['fab', 'github']} />
        </span>
        <span>
          LinkedIn
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </span>
        <span>Resume</span>
        <span>Calendar</span>
        <span>Site by Johnny Kirpalani</span> */}
      </div>
    );
  }
}

export default Contact;
