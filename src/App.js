import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';

const App = () => {
  const [isAppearing, setIsAppearing] = React.useState(false);
  const elementToObserveRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log(entries[0]);
        setIsAppearing(true);
      } else {
        console.log('NOT intersecting');
        setIsAppearing(false);
      }
    });
    observer.observe(elementToObserveRef.current);
    return () => observer.disconnect(); // cleanup
  }, []);

  return (
    <div>
      <Header />
      <Hero ref={elementToObserveRef} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
