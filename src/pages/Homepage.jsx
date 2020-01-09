import React from 'react';
// import './homepage.styles.scss';
import './homepage.styles.css';

import Background from '../assets/images/vippng.com-robot-png-5143307.png';

const Homepage = () => (
  <div className="homepage">
    <div className="left-content-hero">
      <h1 className="hero-h1">Johnny Kirpalani</h1>
      <h2 className="hero-h2">Software Engineer</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        deserunt dignissimos numquam, laborum vitae, quibusdam itaque optio
        expedita harum cumque non consequatur aliquam sequi eveniet architecto
        veniam sapiente aperiam provident!
      </p>
      <a href src="">
        Resume
      </a>
      <button>Make an Appointment</button>
    </div>
    <div className="right-content-hero">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${Background}` }}
      ></div>
    </div>
  </div>
);
export default Homepage;
