import React from 'react';

const toggleMenu = () => {
  const menuButton = document.querySelector('.menu');
  const nav = document.querySelector('.navBar');
  const navLinks = document.querySelector('.navLink');
  if (nav.style.height !== '420px') {
    nav.style.height = '420px';
    menuButton.src = 'images/close.svg';
    menuButton.style.margin = '10px -5px -5px 55px';
    setTimeout(function () {
      navLinks.style.visibility = 'visible';
    }, 600);
  } else {
    menuButton.src = 'images/menu.svg';
    navLinks.style.visibility = 'hidden';
    nav.style.height = '50px';
    menuButton.style.margin = '0px 0px 0px 50px';
  }
};

function Nav() {
  return (
    <nav className="navBar">
      <img
        className="menu"
        onClick={toggleMenu}
        src="images/menu.svg"
        alt="menu"
      />
      <div className="navLink">
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
