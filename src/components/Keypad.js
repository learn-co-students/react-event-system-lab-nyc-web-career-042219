import React, { Component } from 'react';

export default class KeyPad extends React.Component {

    print = () => {
        console.log("Entering password...")
    }

    render() {
        return(
            <input type="password" onKeyUp={this.print}/>
        )
    }
}