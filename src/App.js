import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
    <div>
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      </div>
    
    )
  }
}

export default App;
