import React from 'react';

class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}

	render(){
		return (
			<div>
				<h1>hello, world</h1>
				<h2>It is {this.state.date.toLocalTimeString()}.</h2>
			</div>
		)
	}
}
export default Clock;