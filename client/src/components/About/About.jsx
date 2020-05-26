import React, { useState } from 'react'
// import { ReactComponent as JavascriptLogo } from '../../assets/images/icon_javascript.svg';
// import { ReactComponent as ReactLogo } from '../../assets/images/icon_react.svg';
// import { ReactComponent as NodeLogo } from '../../assets/images/icon_node.svg';
import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.styles.scss'

const About = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false)

  const aboutRef = React.useRef()
  const variants = {
    open: {
      opacity: 1
    },
    closed: { opacity: 0 }
  }

  React.useEffect(() => {
    const aboutObserverOptions = {
      threshold: 0.4
    }

    const aboutObserver = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }, aboutObserverOptions)

    aboutObserver.observe(aboutRef.current)
    return () => aboutObserver.disconnect() // cleanup
  }, [])

  return (
    <motion.div animate={isVisible ? 'open' : 'closed'} variants={variants}>
      <div className='about' ref={aboutRef}>
        <h2 className='fadeIn'>
          <FontAwesomeIcon icon='user-astronaut' className='option-icon' />{' '}
          ABOUT ME
        </h2>
        <div ref={ref} className='paragraph-container fadeIn'>
          <p>
            After working in Sales for several years, my passion for problem
            solving and building useful things facilitated my journey into web
            development. My journey began with building Wordpress-based websites
            as a hobby, which led to word-of-mouth referrals for freelance web
            development contracts. After the successful completion of these
            projects (and having a blast the entire time), I took the leap and
            enrolled in Fullstack Academy's Software Engineering Immersive
            Program, where I cultivated my technical and collaborative skills
            through building full stack projects using Agile methodologies.
          </p>
          <br />
          <p>
            I am eager to contribute my skills as a developer to innovative
            platforms and products.
          </p>
        </div>
        <div className='logo-group fadeIn'>
          <FontAwesomeIcon icon={['fab', 'js']} className='fa-icon' />
          <FontAwesomeIcon icon={['fab', 'node']} className='fa-icon' />
          <FontAwesomeIcon icon={['fab', 'react']} className='fa-icon' />
        </div>
      </div>
    </motion.div>
  )
})

export default About
