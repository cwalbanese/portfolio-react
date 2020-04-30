import React from 'react';

const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.navBar');
  const navLinks = document.querySelector('.navLink');
  menu.classList.toggle('menu-x');
  navLinks.classList.toggle('offsetNav');

  // if (nav.style.height !== '420px') {
  //   nav.style.height = '420px';

  //   // setTimeout(function () {
  //   //   navLinks.style.visibility = 'visible';
  //   // }, 600);
  // } else {
  //   // navLinks.style.visibility = 'hidden';
  //   nav.style.height = '50px';
  // }
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
      <div className="navLink offsetNav">
        <a href="#projects">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="mailto:cwalbanese@gmail.com">EMAIL</a>
        <a
          href="https://www.linkedin.com/in/chris-albanese/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/cwalbanese"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a href="/resume/resume.pdf" target="_blank">
          RESUME
        </a>
      </div>
    </nav>
  );
}

export default Nav;
