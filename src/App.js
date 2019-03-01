import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import Counter from './components/Counter';


class App extends Component {
  state = {
    persons: [
        {name:'Nick', age: '29'},
        {name:'Laura', age: '30'},
        {name:'Casey', age: '1'},
    ]
  }

  // convention on naming event handlers
  switchNameHandler = (newName) => {
    // DONT DO THIS -------> this.state.persons[0].name = 'Dick Face';
    // set state updates the state of a component
    this.setState({
      persons: [
        {name: 'Nick', age: '32'},
        {name:'No longer laura', age: '30'},
        {name:'Casey', age: '1'},
      ]
    })
    }
    nameChangedHandler = (event) => {
      this.setState({
        persons: [
          {name: event.target.value, age: '29'},
          {name:'No longer laura', age: '30'},
          {name:'Casey', age: "1"},
        ]
      })
    }

  render() {

    //inline css variable
    const buttonStyle ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

   
    return (
   <div className="App">
       {/* code inbetween opening and closing tags are called children attributes  */}
      <button style={buttonStyle} onClick={this.switchNameHandler}>Switch Name</button>
      <Counter />

      <div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> 
      </div>
    
    </div>
    );
  }
}

export default App;
      

