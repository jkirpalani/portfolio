import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
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
      <div className="contact">
        <h1>Contact</h1>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="Your Name"
            type="email"
            value={this.state.name}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="Your Email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="Your Message"
            type="text"
            value={this.state.message}
            handleChange={this.handleChange}
            label="message"
            required
          />
          <CustomButton type="submit">Submit</CustomButton>
        </form>

        <span>Github</span>
        <span>LinkedIn</span>
        <span>Resume</span>
        <span>Calendar</span>
        <span>Site by Johnny Kirpalani</span>
      </div>
    );
  }
}

export default Contact;
