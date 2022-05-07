import React from "react";
import "./styles/Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="headerContainer">
        <h1 className="name" href="">
          Jacob Kelcy
        </h1>
        <div className="headerrightSide">
          <a className="Headerprojects" href="https://github.com/JacobKelcy">
            GITHUB
          </a>
          <a className="Headercontact" href="mailto:jacobkelcy23@gmail.com">
            Email Me!
          </a>
        </div>
      </header>
    );
  }
}
