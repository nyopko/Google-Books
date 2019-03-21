import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import BodyWrapper from "./components/BodyWrapper";


class App extends Component {
  render() {
    return (
    <div>
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <BodyWrapper>
      </BodyWrapper>
      </div>
    
    )
  }
}

export default App;
