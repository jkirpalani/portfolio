import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactImage1 from '../../assets/images/heic1808a.jpg';

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
        className="contact contact-image"
        style={{ backgroundImage: `url(${contactImage1})` }}
      >
        <div className="form-box">
          <h2>
            <FontAwesomeIcon icon="paper-plane" className="option-icon" />
            LET'S CONNECT
          </h2>
          <div className="form-container">
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
    );
  }
}

export default Contact;
