import React from "react";
import "./styles/NavBar.css";
export default class TheNavbar extends React.Component {
  render() {
    return (
      <div className="technologies">
        <div className="iconContainer">
          <img
            className="technologies-bar__image"
            src="https://david-sanvicente.github.io/static/media/github-2.f2948be7.svg"
            alt="github"
          />
          <img
            className="technologies-bar__image"
            src="https://david-sanvicente.github.io/static/media/react.4009eef3.svg"
            alt="react"
          ></img>
          <img
            className="technologies-bar__image"
            src="https://iconape.com/wp-content/png_logo_vector/nodejs.png"
            alt="nodejs"
          ></img>
          <img
            className="technologies-bar__image"
            src="https://david-sanvicente.github.io/static/media/express.0fb30b49.svg"
            alt="express.js"
          ></img>
          <img
            className="technologies-bar__image"
            src="https://david-sanvicente.github.io/static/media/sequelize.43c9d125.svg"
            alt="sequelize"
          ></img>
          <img
            className="technologies-bar__image"
            src="https://david-sanvicente.github.io/static/media/css3.3707da3c.svg"
            alt="css"
          ></img>
          <img
            className="technologies-bar__image"
            src="https://david-sanvicente.github.io/static/media/html5.f0361c5e.svg"
            alt="html"
          ></img>
        </div>
      </div>
    );
  }
}
