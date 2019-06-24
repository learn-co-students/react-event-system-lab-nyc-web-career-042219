import React, { Component } from 'react';

class Keypad extends Component {
  keyEvent() {
    console.log('Entering password...');
  };

  render() {
    return <input type="password" onKeyUp={this.keyEvent}/>
  }
}

export default Keypad