import React from 'react';
import Scrollspy from 'react-scrollspy';

const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.navLink');
  menu.classList.toggle('menu-x');
  navLinks.classList.toggle('offsetNav');
};

function Nav() {
  return (
    <nav className="navBar">
      <div onClick={toggleMenu} className="menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="navBackground"></div>
      <div className="navLink offsetNav" onClick={toggleMenu}>
        <Scrollspy
          items={['home', 'about', 'projects', 'skills', 'contact']}
          currentClassName="isCurrent"
        >
          <li>
            <a href="#home" className="left home-link">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="left about-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" className="left projects-link">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#skills" className="left skills-link">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#contact" className="left contact-link">
              CONTACT
            </a>
          </li>
        </Scrollspy>
      </div>
    </nav>
  );
}

export default Nav;
