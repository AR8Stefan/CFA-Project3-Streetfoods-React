import React, { Component } from 'react';
import './NavComponent.css';
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
	// Grid,
	// Row,
	Col,
	Form,
	FormGroup,
	ControlLabel,
	// Checkbox,
	Button,
	FormControl
} from 'react-bootstrap'

import Home from '../Home.js'
import MainMenu from '../Menus/MainMenu.js'
import Order from '../Order.js'
import Contact from '../Contact.js'

import Mediteranian from '../Menus/the_mediteranian.js'
import SouthBorder from '../Menus/south_of_the_border.js'
import Uk from '../Menus/the_uk.js'
import FarEast from '../Menus/the_far_east.js'
import Caribbean from '../Menus/the_caribbean.js'

// class NavComponent extends Component {

	const NavComponent  = () => (
<Router>
	<div>
	  	<Navbar className="Navigation">
  		   	<Nav className="navWide">
    			<div className="wideDiv">
		        	<NavItem onClick={this.burgerToggle}><Link to="/">Home</Link></NavItem>
		        	<NavItem onClick={this.burgerToggle}><Link to="/menus/mainmenu">Menus</Link></NavItem>
		        	<NavItem onClick={this.burgerToggle}><Link to="/order">Order</Link></NavItem>
		        	<NavItem onClick={this.burgerToggle}><Link to="/contact">Contact</Link></NavItem>
		        </div>
		    </Nav>

	    	<Navbar.Header>
	      		<Navbar.Brand>
	      		</Navbar.Brand>
	      		<Navbar.Toggle className="fa fa-bars fa-2x" onClick={this.burgerToggle} />
	    	</Navbar.Header>

	    	<Navbar.Collapse className="navNArrow">
	        	<NavDropdown eventKey={3} id="basic-nav-dropdown" className="narrowLinks">
	          		<MenuItem className="NavItems" onClick={this.burgerToggle}><Link to="/">Home</Link></MenuItem>

	          		<MenuItem className="NavItems" onClick={this.burgerToggle}><Link to="/menus/mainmenu">Menus</Link></MenuItem>

	          		<MenuItem className="NavItems" onClick={this.burgerToggle}><Link to="/order">Order</Link></MenuItem>
	          			
	          		<MenuItem className="NavItems" onClick={this.burgerToggle}><Link to="/contact">Contact</Link></MenuItem>

	        	</NavDropdown>   	
	    	</Navbar.Collapse>

	  	</Navbar>

	    <Switch>
	        <Route exact path="/" component={Home}/>
	        <Route path="/menus/mainmenu" component={MainMenu}/>
	        <Route path="/order" component={Order}/>
	        <Route path="/contact" component={Contact}/>
	        <Route path="/the_mediteranian" component={Mediteranian}/>
	        <Route path="/south_of_the_border" component={SouthBorder}/>
	        <Route path="/the_uk" component={Uk}/>
	        <Route exact path="/the_far_east" component={FarEast}/>
	        <Route exact path="/the_caribbean" component={Caribbean}/>
	    </Switch>

		<div className="Footer">
			<div className="Newsletter">
				<Form horizontal>
				    <FormGroup controlId="formHorizontalEmail">
				      	<Col componentClass={ControlLabel} sm={2}>
				      		<Col xs={6} xsOffset={6}>
				        		<p>Get Updates</p>
				        	</Col>
				      	</Col>
				      	<Col sm={6}>
				        	<FormControl type="email" placeholder="Email" />
				        	<Button className="NewsButton" type="submit">
				          	Subscribe
				        	</Button>
				      	</Col>
				      	<Col className="Footer-text">
							<li><a href="https://au.pinterest.com/search/pins/?q=food&rs=typed&term_meta[]=food%7Ctyped">Pinterest</a></li>
							<li><Link to="/contact">Contact</Link></li>
							<li>Link</li>
						</Col>

				    </FormGroup>
				</Form>
			
				
			</div>
		</div>

	</div>

</Router>
);
	
// }; //End class

export default NavComponent;