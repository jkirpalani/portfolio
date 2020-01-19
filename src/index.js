import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faWrench,
  faUserAstronaut,
  faPaperPlane,
  faEnvelope,
  faRocket,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(
  fab,
  faWrench,
  faUserAstronaut,
  faPaperPlane,
  faRocket,
  faEnvelope,
  faFile
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
