import React from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";

// import {
// 	Navbar,
// 	Nav,
// 	NavItem,
// 	NavDropdown,
// 	MenuItem,
// 	Grid,
//  Row,
// 	Col,
// 	Form,
// 	FormGroup,
// 	ControlLabel,
// 	Checkbox,
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

	handleInc = () => {
		appState.increment()
	};

	handleDec = () => {
		appState.decrement()
	};

	render() {
		return (
			<div>
				Counter: {appState.count} <br/>
				<button onClick={this.handleInc}> + </button>
				<button onClick={this.handleDec}> - </button>
			</div>
		)

	}
};

export default Counter;









