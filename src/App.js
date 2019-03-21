import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import BodyWrapper from "./components/BodyWrapper";
import SearchCard from "./components/SearchCard";


class App extends Component {
  render() {
    return (
    <div>
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <SearchCard></SearchCard>
      <BodyWrapper>
      </BodyWrapper>
      </div>
    
    )
  }
}

export default App;
