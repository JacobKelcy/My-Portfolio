import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

import Header from "./components/Header";
import TheNavbar from "./components/NavBar";
import Projects from "./components/Projects";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <TheNavbar />
          <Projects />
        </Router>
      </div>
    );
  }
}
