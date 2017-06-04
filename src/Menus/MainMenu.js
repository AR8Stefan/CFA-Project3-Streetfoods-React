import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './Menus.css';
import { Well, Grid, Col, Row, Button } from 'react-bootstrap';
import Mediteranian from './the_mediteranian.js'
import SouthBorder from './south_of_the_border.js'
import Uk from './the_uk.js'
import FarEast from './the_far_east.js'
import Caribbean from './the_caribbean.js'


const MenuLists = () => {
	return <Router>
		<div>
			<h1>Main Menu</h1>
			<Grid xs={12}>
				<Row center="xs">
					<div className="AppMenus">
						<Col className="ListCols" xs={6} md={4}>
							<Button className="MainMenuLists" onClick={this.burgerToggle}><Link to="/the_mediteranian">The Mediteranian</Link>
							
							</Button>
						</Col>
						<Col className="ListCols" xs={6} md={4}>

							<Button>
						    <li className="MainMenuLists" onClick={this.burgerToggle}><Link to="/south_of_the_border">South of the Border</Link></li>
						    </Button>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
						    <Button>
						    <li className="MainMenuLists" onClick={this.burgerToggle}><Link to="/the_uk">The UK</Link></li>
						    </Button>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
						    <Button>
						    <li className="MainMenuLists" onClick={this.burgerToggle}><Link to="/the_far_east">The Far East</Link></li>
						    </Button>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
						    <Button>
						    <li className="MainMenuLists" onClick={this.burgerToggle}><Link to="/the_caribbean">The Caribbean</Link></li>
						    </Button>
					    </Col>
					</div>
				</Row>
			</Grid>

			<Switch>
			    <Route path="/the_mediteranian" component={Mediteranian}/>
			    <Route path="/south_of_the_border" component={SouthBorder}/>
			    <Route path="/the_uk" component={Uk}/>
			    <Route exact path="/the_far_east" component={FarEast}/>
			    <Route exact path="/the_caribbean" component={Caribbean}/>
		    </Switch>

		</div>
	</Router>

}

export default MenuLists;