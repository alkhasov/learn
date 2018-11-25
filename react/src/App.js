import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie
          title="2001: A Space Odyssey"
          imgSrc="https://i.imgur.com/vaZoNCA.jpg"
        />
      </div>
    );
  }
}

export default App;

// src/App.js
function Img(props) {
  return <img src={props.src} className={props.className} alt={props.alt} />;
}

function Movie(props) {
  return (
    <div className="movie-page">
      <Img className="movie-img" src={props.imgSrc} alt={props.title} />
      <h1 className="movie-title">{props.title}</h1>
    </div>
  );
}

class Dropdown extends Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleOpen}>Dates</button>
        {this.state.isOpen && <div>My Content</div>}
      </div>
    );
  }
}
