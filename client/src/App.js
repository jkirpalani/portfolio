import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { MenuToggle } from './components/SideDrawer/MenuToggle';
import SideDrawer from './components/SideDrawer/SideDrawer';

const App = () => {
  const [appendClass, setAppendClass] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

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

  let showDrawer;
  if (isOpen) {
    showDrawer = <SideDrawer isOpen={isOpen} handleToggle={handleToggle} />;
  }

  return (
    <div>
      <MenuToggle handleToggle={handleToggle} isOpen={isOpen} />
      <Navbar appendClass={appendClass} />
      {showDrawer}
      <Hero ref={elementToObserveRef} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
