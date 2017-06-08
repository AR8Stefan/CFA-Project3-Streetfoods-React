import React from 'react';
import {
	// Navbar,
	// Nav,
	// NavItem,
	// NavDropdown,
	// MenuItem,
	// Grid,
	// Row,
	Col,
	Form,
	FormGroup,
	// FieldGroup,
	ControlLabel,
	// Checkbox,
	Button,
	FormControl
} from 'react-bootstrap'

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