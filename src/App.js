import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
        // state is managed inside a component
        // whereas props is set and passed from outside of the component
        // Also, state is only usable in components that extends { Component } from 'react'.
        // So it is not available in function components (like the Person component)
  state = {
    students : [
      {name: 'Junnie', age: 23},
      {name: 'Harnie', age: 20},
      {name: 'Jennifer', age: 23}
    ]
  }  
  // you can define other properties as well, but still, state is a very special one.    

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app! :) </h1>
        <p>Yay! This is really working!</p>
        <Person name={this.state.students[0].name} age={this.state.students[0].age} />
        <Person name={this.state.students[1].name} age={this.state.students[1].age}>Hobby: Sleeping</Person>
        <Person name={this.state.students[2].name} age={this.state.students[2].age}/>
      </div>
    );
  }
}

export default App;
