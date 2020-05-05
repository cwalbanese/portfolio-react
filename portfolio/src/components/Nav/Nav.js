import React from 'react';

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
        <a href="#home" className="left home-link">
          HOME
        </a>
        <a href="#about" className="left about-link">
          ABOUT
        </a>
        <a href="#projects" className="left projects-link">
          PROJECTS
        </a>
        <a href="#skills" className="left skills-link">
          SKILLS
        </a>
        <a href="#contact" className="left contact-link">
          CONTACT
        </a>
      </div>
    </nav>
  );
}

export default Nav;
