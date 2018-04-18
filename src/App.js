import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app! :) </h1>
        <p>Yay! This is really working!</p>
        <Person name="Junnie" age="23" />
        <Person name="Harnie" age="20">Hobby: Sleeping</Person>
        <Person name="Jennifer" age="23"/>
      </div>
    );
  }
}

export default App;
