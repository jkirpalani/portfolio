import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
// import Header from './components/header2/Header2';

const App = () => {
  const [appendClass, setAppendClass] = React.useState(false);

  const elementToObserveRef = React.useRef();

  React.useEffect(() => {
    const observerOptions = {
      rootMargin: '-550px 0px 0px 0px',
    };

    const observer = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        setAppendClass(true);
        console.log('not intersecting', elementToObserveRef.current);
      } else {
        setAppendClass(false);
        console.log('intersecting', elementToObserveRef.current);
      }
    }, observerOptions);
    observer.observe(elementToObserveRef.current);
    return () => observer.disconnect(); // cleanup
  }, []);

  return (
    <div>
      <Header appendClass={appendClass} />
      <Hero ref={elementToObserveRef} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
