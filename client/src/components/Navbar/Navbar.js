import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'

const Navbar = ({ drawerClickHander, appendClass }) => {
  return (
    <header className={`navbar${appendClass ? ' nav-scrolled' : ''}`}>
      <nav className='navbar-navigation'>
        <div className='navbar-toggle-button'></div>
        <div className='navbar-logo'>
          <Link
            activeClass='active'
            to='hero'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            JK
          </Link>
        </div>
        <div className='navbar-spacing'></div>
        <div className='navbar-navigation-items'>
          <ul>
            <li>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='project-section'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
            <li>
              <div className='option-separator'>|</div>
            </li>

            <li>
              <a
                href='https://github.com/jkirpalani'
                className='nav-icon'
                alt='github'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>

            <li>
              <a
                href='https://www.linkedin.com/in/johnny-kirpalani'
                className='nav-icon'
                alt='linkedIn'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
