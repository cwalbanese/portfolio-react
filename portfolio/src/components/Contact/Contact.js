import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2 className="title">CONTACT ME</h2>
      <div className="contact">
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
    </section>
  );
}

export default Contact;
