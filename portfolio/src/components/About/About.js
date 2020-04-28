import React from 'react';

function About() {
  return (
    <section id="about">
      <h2 className="title">ABOUT ME</h2>
      <div className="about">
        <p>Hi! I'm Chris, a New York based software engineer.</p>
        <br />
        <p>
          I am experienced in full stack web development. My skills allow me to
          solve complex programming problems presented on the job.
        </p>
        <br />
        <p>
          I also love technology, whether it be computers or with my prior
          experience in the automotive industry. I'm passionate to know how
          things work, how to build them, and how to fix them, this is what
          drives me.
        </p>
        <br />
        <p>
          My technical problem solving mindset has been an asset to me at any
          position, both on a team and in leadership roles.
        </p>
        <br />
        <p className="employment">
          I am currently open to employment opportunities.
        </p>
        <br />
        <p className="connect">
          Let's connect: <a href="mailto:cwalbanese@gmail.com">Email me!</a> or
          <a
            href="https://www.linkedin.com/in/chris-albanese/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my LinkedIn!
          </a>
        </p>
        <br />
        <p className="connect">
          <a href="/resume/resume.pdf" target="_blank">
            View my Resume!
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
