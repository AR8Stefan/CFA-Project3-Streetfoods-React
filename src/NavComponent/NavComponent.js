import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './NavComponent.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Home from '../Home.js'
import MainMenu from '../Menus/MainMenu.js'
import Order from '../Order.js'
import Contact from '../Contact.js'
import App from '../App.js'

import MenuLists from '../Menus/MainMenu.js'
import Mediteranian from '../Menus/the_mediteranian.js'
import SouthBorder from '../Menus/south_of_the_border.js'
import Uk from '../Menus/the_uk.js'
import FarEast from '../Menus/the_far_east.js'
import Caribbean from '../Menus/the_caribbean.js'

// class NavComponent extends Component {

	const NavComponent  = () => (
      	<Router>
      		<div>
	        	<nav>
	        		<div className="navWide">
			            <div className="wideDiv">
				            <li onClick={this.burgerToggle}><Link to="/">Home</Link></li>
			              	<li onClick={this.burgerToggle}><Link to="/menus/mainmenu">Menus</Link></li>
			             	<li onClick={this.burgerToggle}><Link to="/order">Order</Link></li>
			              	<li onClick={this.burgerToggle}><Link to="/contact">Contact</Link></li>
			            </div>
			        </div>

	          		<div className="navNArrow">
	          			<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}>
	          				<div className="narrowLinks">
			              		<li onClick={this.burgerToggle}><Link to="/">Home</Link></li>
			              		<li onClick={this.burgerToggle}><Link to="/menus/mainmenu">Menus</Link></li>
			             		<li onClick={this.burgerToggle}><Link to="/order">Order</Link></li>
			              		<li onClick={this.burgerToggle}><Link to="/contact">Contact</Link></li>
			              	</div>
	              		</i>
	          		</div>
	          	</nav>

	          	<div>
	          		<App><MenuLists></MenuLists></App>
	          		

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
				
				</div>


		    </div>
		</Router>

		// burgerToggle() {
		// 	let linksEl = document.querySelector('.narrowLinks');
		// 	if (linksEl.style.display === 'block') {
		// 	    linksEl.style.display = 'none';
		// 	} else {
		// 	    linksEl.style.display = 'block';
		// 	}
	);
// }; //End class

export default NavComponent;