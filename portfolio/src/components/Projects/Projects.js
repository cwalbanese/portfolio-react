import React from 'react';

function checkProjects() {
  const elements = document.querySelectorAll('.hidden');
  const windowHeight = window.innerHeight;
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let positionFromTop = elements[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add('projects-animation');
      element.classList.remove('hidden');
    }
  }
}

window.addEventListener('scroll', checkProjects);

checkProjects();

function Projects() {
  return (
    <section id="projects">
      <h2 className="title">PROJECTS</h2>
      <div className="projects-content">
        <div className="project hidden">
          <a
            href="https://coders-lounge-frontend.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/preview6.png" alt="project preview" />
          </a>
          <h2>Coders Lounge</h2>
          <br />
          <p>Technology used:</p>
          <p>NodeJS, ExpressJS, ReactJS, MongoDB</p>
          <br />
          <p>
            A message board built for the coding community. Front-end with
            React, Back-end API with Node/Express and MongoDB.
          </p>
          <br />
          <p>
            <a
              href="https://coders-lounge-frontend.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deployed App
            </a>
          </p>
          <p>
            <a
              href="https://github.com/cwalbanese/coders-lounge"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Front-end Code
            </a>
          </p>
          <p>
            <a
              href="https://github.com/cwalbanese/coders-lounge-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Back-end code
            </a>
          </p>
        </div>
        <div className="project hidden">
          <a
            href="https://covid-19-testing.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/preview5.png" alt="project preview" />
          </a>
          <h2>COVID-19 Testing</h2>
          <br />
          <p>Technology used:</p>
          <p>ReactJS</p>
          <br />
          <p>
            Built as a useful tool amidst a global pandemic. Front-end with
            React. Third-party community sourced API.
          </p>
          <br />
          <p>
            <a
              href="https://covid-19-testing.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deployed App
            </a>
          </p>
          <p>
            <a
              href="https://github.com/cwalbanese/covid-19-test"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </p>
        </div>
        <div className="project hidden">
          <a
            href="https://total-garage-front.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/preview4.png" alt="project preview" />
          </a>
          <h2>Total Garage</h2>
          <br />
          <p>Technology used:</p>
          <p>Python, Django, ReactJS, PostgreSQL</p>
          <br />
          <p>
            Team of 2, pair programming. Front-end with React, Back-end API with
            Python/Django and PostgreSQL.
          </p>
          <br />
          <p>
            <a
              href="https://total-garage-front.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deployed App
            </a>
          </p>
          <p>
            <a
              href="https://github.com/cwalbanese/total_garage_frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Front-end Code
            </a>
          </p>
          <p>
            <a
              href="https://github.com/cwalbanese/total_garage_backend/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Back-end code
            </a>
          </p>
        </div>
        <div className="project hidden">
          <a
            href="https://portfolio-rater-front.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/preview3.png" alt="project preview" />
          </a>
          <h2>Portfolio Rater</h2>
          <br />
          <p>Technology used:</p>
          <p>NodeJS, ExpressJS, ReactJS, MongoDB</p>
          <br />
          <p>
            Team of 3, Agile methods with daily Scrum stand-ups. Front-end with
            React, Back-end API with Node/Express and MongoDB.
          </p>
          <br />
          <p>
            <a
              href="https://portfolio-rater-front.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deployed App
            </a>
          </p>
          <p>
            <a
              href="https://github.com/cwalbanese/portfolioRater"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Front-end Code
            </a>
          </p>
          <p>
            <a
              href="https://github.com/cwalbanese/portfolioRaterAPI"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Back-end code
            </a>
          </p>
        </div>

        <div className="project hidden">
          <a
            href="https://thirsty-brewery-search.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/preview2.png" alt="project preview" />
          </a>
          <h2>Thirsty</h2>
          <br />
          <p>Technology used:</p>
          <p>ReactJS</p>
          <br />
          <p>
            A search tool to find local breweries by fetching data from a
            third-party API. Front-end built with React.
          </p>
          <br />
          <p>
            <a
              href="https://thirsty-brewery-search.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deployed App
            </a>
          </p>
          <p>
            <a
              href="https://github.com/cwalbanese/thirsty-brewery-search/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </p>
        </div>

        <div className="project hidden">
          <a
            href="https://cwalbanese.github.io/cars-trivia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/preview1.png" alt="project preview" />
          </a>
          <h2>Car Trivia</h2>
          <br />
          <p>Technology used:</p>
          <p>HTML, CSS, JavaScript</p>
          <br />
          <p>
            A trivia game I created when I was just learning the bare bones of
            web development, using vanilla JavaScript.
          </p>
          <br />
          <p>
            <a
              href="https://cwalbanese.github.io/cars-trivia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Deployed App
            </a>
          </p>
          <p>
            <a
              href="https://github.com/cwalbanese/cars-trivia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
