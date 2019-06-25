import React, { Component } from 'react';

class Keypad extends React.Component {
  handleInputPassword = () => console.log('Entering password...')
  render(){
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
    )
  }
}// end of class Keypad
export default Keypad;
