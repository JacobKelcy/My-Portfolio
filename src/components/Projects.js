import React from "react";
import "./styles/Projects.css";
import image1 from "./Screen Shot 2022-05-03 at 3.29.37 PM.png";
import image2 from "./Screen Shot 2022-05-04 at 2.16.01 PM.png";
import image3 from "./Screen Shot 2022-05-04 at 3.49.49 PM.png";

export default class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="projects">
        <h1 className="heading">Projects</h1>

        <div className="projects__grid">
          <div className="project">
            <div className="col-1">
              <h3 className="heading-secondary">
                <span className="highlight">Ecommerce Store Api</span>
              </h3>
              <div className="project__display">
                <div className="project__display__poster">
                  <a href="https://www.youtube.com/watch?v=p1x6HlvMUgU">
                    <img className="pic" src={image1} alt="Project Thumbnail" />
                  </a>
                </div>
                <div className="project__display__actions">
                  <a
                    href="https://github.com/string-cheese-fsa/spray-r"
                    className="link"
                  >
                    <i className="fas fa-code-branch"></i>
                    <span className="highlight">View Source</span>
                  </a>
                </div>
                <p className="aside">
                  Built with Front-End Features. Fetching data from the
                  fakestoreapi.com API.
                </p>
              </div>
              <div className="project__technologies">
                <p className="small-section-title">Technologies Used</p>
                <ul className="project__technologies__list">
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>React Hooks</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>JS</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>JSX</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>CSS</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>HTML</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Redux</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Node.js</p>
                  </li>
                </ul>
              </div>

              <div className="col-3">
                <p className="small-section-title">Notable Features</p>
                <ul className="project__technologies__list project__technologies__list--no-grid">
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Sort Item By Category</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>React Routes</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Add/Remove Item From Cart Function</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Item Count In Cart Icon</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="project__detail-section">
                <p className="small-section-title">My Role</p>
                <p>
                  This is a project I did while learning about fetching API's
                  and Redux. I used React Hooks to Route all of the components
                  together, Fetched data from the api to display it, and made
                  the website compatible for Desktop and Mobile devices using
                  media queries.
                </p>
              </div>
              <div className="project__detail-section">
                <p className="small-section-title">Project Difficulties</p>
                <p>
                  The only difficulties I had involved Redux. I had to spend a
                  lot of time learning about and installing updated
                  dependencies.
                </p>
              </div>
              <div className="project__detail-section">
                <p className="small-section-title">My Solution</p>
                <p>
                  I made sure to research each Redux function so I could
                  accurately use them. When I had trouble understanding these
                  functions I would search the internet to learn the syntax and
                  meaning behind the code I was writing. Other than that I had
                  no issues with anything else. Using React Hooks, styling, and
                  inputing the API's data into the JSX was easy going.
                </p>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="col-1">
              <h3 className="heading-secondary">
                <span className="highlight">FITNESS TRACKER (BACK-END)</span>
              </h3>
              <div className="project__display">
                <div className="project__display__poster">
                  <a href="https://www.youtube.com/watch?v=p1x6HlvMUgU">
                    <img className="pic" src={image3} alt="Project Thumbnail" />
                  </a>
                </div>
                <div className="project__display__actions">
                  <a
                    href="https://github.com/string-cheese-fsa/spray-r"
                    className="link"
                  >
                    <i className="fas fa-code-branch"></i>
                    <span className="highlight">View Source</span>
                  </a>
                </div>
                <p className="aside">
                  Built the back-end portion of a fitness website. using
                  JavaScript and PSQL
                </p>
              </div>
              <div className="project__technologies">
                <p className="small-section-title">Technologies Used</p>
                <ul className="project__technologies__list">
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>JS</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>npm run test:watch</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>PSQL</p>
                  </li>
                </ul>
              </div>

              <div className="col-3">
                <p className="small-section-title">Notable Features</p>
                <ul className="project__technologies__list project__technologies__list--no-grid">
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Passing Tests In the test:watch</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="project__detail-section">
                <p className="small-section-title">My Role</p>
                <p>
                  Created tables for the data-base and wrote JavaScript code to
                  pass test specs.
                </p>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="col-1">
              <h3 className="heading-secondary">
                <span className="highlight">Snake Game</span>
              </h3>
              <div className="project__display">
                <div className="project__display__poster">
                  <a href="https://www.youtube.com/watch?v=p1x6HlvMUgU">
                    <img className="pic" src={image2} alt="Project Thumbnail" />
                  </a>
                </div>
                <div className="project__display__actions">
                  <a
                    href="https://github.com/string-cheese-fsa/spray-r"
                    className="link"
                  >
                    <i className="fas fa-code-branch"></i>
                    <span className="highlight">View Source</span>
                  </a>
                </div>
                <p className="aside">
                  Snake Game is a mobile
                  <span className="highlight"> augmented reality </span>
                  video game where the player maneuvers a growing line that
                  becomes a primary obstacle to itself.
                </p>
              </div>
              <div className="project__technologies">
                <p className="small-section-title">Technologies Used</p>
                <ul className="project__technologies__list">
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>JS</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>HTML</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>CSS</p>
                  </li>
                </ul>
              </div>

              <div className="col-3">
                <p className="small-section-title">Notable Features</p>
                <ul className="project__technologies__list project__technologies__list--no-grid">
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Score-Tracking</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Snake-Growth</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Game-Over</p>
                  </li>
                  <li>
                    <i className="fas fa-dot-circle"></i>
                    <p>Key Controlled Game</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="project__detail-section">
                <p className="small-section-title">My Role</p>
                <p>
                  In this project, I worked extensively on learning to use
                  <span className="highlight"> HTML Canvas</span> to create the
                  game board and snake. Differentiating the snakes body from the
                  snakes head was done by using the .push method to paint each
                  tile behind the snake heads X and Y coordinate then using the
                  .shift method to cut off the snakes tail as it moves forward
                  to make the the entire snakes body look like it's moving. When
                  the snake eats an apple the snakes tail grows. I made a
                  function to check for a collision between the apple and snake
                  head. If the collision function is true it will add a painted
                  tile to the snakes tail.
                </p>
              </div>
              <div className="project__detail-section">
                <p className="small-section-title">Project Difficulties</p>
                <p>
                  Using canvas with javascript functions took some time of
                  studying to understand. In the end I was able to figure it out
                  and make the game completely functional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
