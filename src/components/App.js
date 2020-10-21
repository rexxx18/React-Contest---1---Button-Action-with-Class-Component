import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: ""
    };
  }
   id="";
  handleclick = () => {
	id="para";
    this.setState({
      paragraph:
        {"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"}
    });
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleclick}>
          click
        </button>
        <p id={id}>{this.state.paragraph}</p>
      </div>
    );
  }
}

export default App;
