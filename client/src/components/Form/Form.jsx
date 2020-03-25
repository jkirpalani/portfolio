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
    // alert(JSON.stringify(data));
    reset();

    axios({
      method: 'POST',
      url: 'http://localhost:5000/send',
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        message: data.message,
      },
    }).then(response => {
      if (response.data.msg === 'success') {
        alert('Email sent, awesome!');
        reset();
      } else if (response.data.msg === 'fail') {
        alert('Oops, something went wrong. Try again');
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
