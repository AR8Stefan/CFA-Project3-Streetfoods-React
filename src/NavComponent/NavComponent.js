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

          		<hr/>
          		<App>
          		</App>

          		<Switch>
			        <Route exact path="/" component={Home}/>
			        <Route path="/menus/mainmenu" component={MainMenu}/>
			        <Route path="/order" component={Order}/>
			        <Route path="/contact" component={Contact}/>
		        </Switch>
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