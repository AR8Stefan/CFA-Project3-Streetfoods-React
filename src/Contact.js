import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem,
	Grid,
	Row,
	Col,
	Form,
	FormGroup,
	FieldGroup,
	ControlLabel,
	Checkbox,
	Button,
	FormControl
} from 'react-bootstrap'

import Home from './Home.js'
import MainMenu from './Menus/MainMenu.js'
import Order from './Order.js'

import Mediteranian from './Menus/the_mediteranian.js'
import SouthBorder from './Menus/south_of_the_border.js'
import Uk from './Menus/the_uk.js'
import FarEast from './Menus/the_far_east.js'
import Caribbean from './Menus/the_caribbean.js'

const Contact = () => {
	return <div>
		<h1>Contact text</h1>

		<Form horizontal>
		    <FormGroup controlId="formHorizontalEmail">
		      	<Col componentClass={ControlLabel} sm={2}>Email
		      	</Col>
		      	<Col sm={10}>
		        	<FormControl type="email" placeholder="Email" />
		      	</Col>
		    	</FormGroup>

		    	<FormGroup controlId="formHorizontalQuery">
		      	<Col componentClass={ControlLabel} sm={2}>Submit Your Query
		      	</Col>
		      	<Col sm={10}>
		        <FormControl type="text" placeholder="Submit Your Query" />
		      	</Col>
		    	</FormGroup>

		    	<FormGroup>
		      		<Col smOffset={2} sm={10}>
		        		<Button type="submit">
		          		Submit
		        		</Button>
		      		</Col>
		    	</FormGroup>
		  	</Form>
	</div>
}

export default Contact;