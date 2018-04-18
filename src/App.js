import React, { Component } from 'react';
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
    ],
    otherState: 'some other value'
  }  
  // you can define other properties as well, but still, state is a very special one.    

  switchNameHandler = (newName) => {
    // DON'T DO THIS : this.state.students[2].name = 'Hailey'; 
    // 리액트에선 이렇게 state을 directly change하지 못함!
    this.setState({
      students: [ //이렇게 특정 state이름을 지칭해주면, otherState remains untouched!
      {name: 'Junnie', age: 23},
      {name: newName, age: 20},
      {name: 'Jennifer', age: 23}
      ]
    })
    // setState은 우리가 앞서 'react'로부터 import하고 extend해온 { Component }에 미리 정의되어있는 메소드임.
    // 그래서, 우리가 따로 정의해준적은 없지만 곧바로 this.setState으로 갖다 쓸 수 있는것임.
  }
// event occurs -> change state with this.setState method 

  nameChangeHandler = (event) => {
    this.setState({
      students: [ 
      {name: 'Junnie', age: 23},
      {name: event.target.value, age: 20},
      {name: 'Jennifer', age: 23}
      ]
    }
      )
  }

  render() {
    return (
      <div className="App">

        <h1>Hi, I am a react app! :) </h1>
        <p>Yay! This is really working!</p>

        <button onClick={() => this.switchNameHandler('New name_1!')}>Switch Name</button> 
                        {/*원랜 메소드() 이런식으로 쓰면 렌더하는 즉시 호출돼서 이렇게 쓰면 안되는데, 
                           얜 조건을 달고 함수 안에 넣어준거니까 이렇게 써주는게 맞음!!*/}
                        {/*이런식으로 함수호출해서 쓸수도 있지만, 비효율적일 수 있어서 웬만하면 아래처럼 bind메소드를 쓰길 추천!*/}
                        {/* passing down method references! */}
                        
        <Person 
          name={this.state.students[0].name} 
          age={this.state.students[0].age}
          changed={this.nameChangeHandler} 
        />

        <Person 
          name={this.state.students[1].name} 
          age={this.state.students[1].age}
          click={this.switchNameHandler.bind(this, 'New name_2!')} 
          //  ** you can send methods as props to functional components! (using this 'bind' method!)
          //     passing down method references like this!!
          changed={this.nameChangeHandler} 
        >                                   
          Hobby: Sleeping
        </Person>

        <Person 
          name={this.state.students[2].name} 
          age={this.state.students[2].age}
          changed={this.nameChangeHandler}
        />

      </div>
    );
  }
}

export default App;
