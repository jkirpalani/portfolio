import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.styles.scss';
import CustomButton from '../Custom-Button/Custom-Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const Form = props => {
  const {
    register,
    handleSubmit,
    reset,
    errors,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();

    axios({
      method: 'POST',
      url:
        'https://us-central1-portfolio-83a06.cloudfunctions.net/emailMessage',
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        message: data.message,
      },
    }).then(response => {
      if (response.data.msg === 'success') {
        console.log('Email sent!');
        reset();
      } else if (response.data.msg === 'fail') {
        console.log('Something went wrong. Try again');
      }
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>
        <FontAwesomeIcon icon="paper-plane" className="option-icon" />
        LET'S CONNECT
      </h1>
      <div className="form-container">
        <label>First Name:</label>
        <input name="firstName" ref={register({ required: true })} />
        {errors.firstName && 'First name is required'}

        <label>Last Name:</label>
        <input
          name="lastName"
          ref={register({ required: true, minLength: 2 })}
        />

        {errors.lastName && 'Last name is required'}
        <label>Email</label>
        <input
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && 'Email is required'}
        <label>Message</label>
        <textarea name="message" ref={register} />
        {errors.message && 'Message is required'}

        <CustomButton type="submit" disabled={isSubmitting} buttonType="submit">
          <span>Submit</span>
        </CustomButton>
      </div>
    </form>
  );
};

export default Form;
