import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: ""
    };
  }
  handleclick = () => {
    this.setState({
      paragraph:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleclick}>
          click
        </button>
        {this.state.paragraph}
      </div>
    );
  }
}

export default App;
