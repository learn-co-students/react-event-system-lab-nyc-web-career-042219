import React from 'react'

export default class EyesOnMe extends React.Component {

	foo = () => {
		console.log("Good!")
	}

	bar = () => {
		console.log('Hey! Eyes on me!')
	}

	render(){
		return (
			<button onFocus={this.foo} onBlur={this.bar}></button>
		)
	}
}