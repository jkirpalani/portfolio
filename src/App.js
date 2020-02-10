import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Main} />
    </div>
  );
};

export default App;
