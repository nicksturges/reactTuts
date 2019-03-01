import React, { Component } from 'react'

export class Button extends Component {
    state={
        text: 'click me'
    }
    whenYouClickMe() {
        console.log("fuck off")
    }
    
   
  render() {

    
      return (
      <div>
        <button onClick={this.whenYouClickMe}>{this.state.text}</button>
      </div>
      )
}

}
 


export default Button
