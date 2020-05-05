import React from 'react';

setTimeout(function () {
  const header = document.querySelector('.box-wrapper');
  header.classList.remove('loading');
}, 600);

function Header() {
  return (
    <section id="home">
      <header>
        <div className="header-background"></div>
        <div className="box-wrapper loading">
          <div className="header-content box">
            <h1>
              CHRIS <span className="lastname">ALBANESE</span>
            </h1>
            <h2>Software Engineer</h2>
            <img src="images/profile.jpg" alt="profile" />
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
