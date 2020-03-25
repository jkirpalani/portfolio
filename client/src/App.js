import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SideDrawer from './components/SideDrawer/SideDrawer';

const App = () => {
  const [appendClass, setAppendClass] = useState(false);
  const elementToObserveRef = useRef();

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-550px 0px 0px 0px',
    };

    const observer = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        setAppendClass(true);
      } else {
        setAppendClass(false);
      }
    }, observerOptions);

    observer.observe(elementToObserveRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar appendClass={appendClass} />
      <SideDrawer />
      <Hero ref={elementToObserveRef} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
