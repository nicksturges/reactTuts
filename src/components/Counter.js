import React, { Component } from 'react'

export class Counter extends Component {
    state ={
        count:  0
    };

    handleClick = () => {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    };

    clickHandler = () => {
      this.setState(({ count }) => ({
        count: 0
      }));
    }



  render() {
    const stylin ={
      width: '60%',
      margin: 'auto',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc'

    }
    return (
      <div style={stylin}>
          <button onClick={this.handleClick}>increment</button>
          <p style={{color: 'green'}}>{this.state.count}</p>
          <button onClick={this.clickHandler}>clear</button>
        
      </div>
    )
  }
}

export default Counter
