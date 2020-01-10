import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/" component={About} />
      <Route path="/" component={Projects} />
      <Route path="/" component={Contact} />
    </div>
  );
}

export default App;
