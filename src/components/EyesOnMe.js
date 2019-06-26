// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{

  foc= () =>{
    console.log('Good!');
  }

  blu= ()=>{
    console.log('Hey! Eyes on me!');
  }

  render(){
    return <button onFocus={this.foc} onBlur={this.blu}></button>
  }

}

export default EyesOnMe;
