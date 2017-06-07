import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {observable} from "mobx";
import {observer} from "mobx-react";

// import {
// 	Navbar,
// 	Nav,
// 	NavItem,
// 	NavDropdown,
// 	MenuItem,
// 	// Grid,
// 	// Row,
// 	Col,
// 	Form,
// 	FormGroup,
// 	ControlLabel,
// 	// Checkbox,
// 	Button,
// 	FormControl
// } from 'react-bootstrap'

const appState = observable({
	count: 0
});

appState.increment = function () {
	this.count++;
}

appState.decrement = function () {
	this.count--;
}


@observer
class Counter extends React.Component {


	render() {
		return (
			<div>
				Counter: {this.props.store.count} <br/>
				<button onClick={this.handleInc}> + </button>
				<button onClick={this.handleDec}> - </button>
			</div>
		)
	}

	handleInc = () {
		this.props.store.increment()
	}

	handleDec = () {
		this.props.store.decrement()
	}
};

export default Counter;









