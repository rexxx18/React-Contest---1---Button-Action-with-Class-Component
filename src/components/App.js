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
    let element = document.getElementById("main");
    let para = document.createElement("p");

    var node = document.createTextNode("This is a new paragraph.");
    para.appendChild(node);
    para.setAttribute("id", "para");

    this.setState({
      paragraph: element.appendChild(para)
    });
  };

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleclick}>
          click
        </button>
      </div>
    );
  }
}

export default App;
