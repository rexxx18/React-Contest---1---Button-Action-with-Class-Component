import React, { Component, useState } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: false
    };
  }
  handleclick = () => {
    this.setState({
      paragraph: true
    });
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleclick}>
          click
        </button>
        <p id={this.state.paragraph ? "para" : ""}>
          {this.state.paragraph
            ? "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
            : ""}
        </p>
      </div>
    );
  }
}

export default App;
