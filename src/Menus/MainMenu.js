import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './Menus.css';
import { Grid,
	Col,
	Row,
	Button } from 'react-bootstrap';
import Mediteranian from './the_mediteranian.js'
import SouthBorder from './south_of_the_border.js'
import Uk from './the_uk.js'
import FarEast from './the_far_east.js'
import Caribbean from './the_caribbean.js'

const MenuLists = () => {
	return <Router>
		<div>
			<h1>Eat Local, Taste the World.123</h1>
			<Grid>
				<Row>
					<div className="AppMenus">
						<Col className="ListCols" xs={6} md={4}>
							<Button className="MainMenuLists Mediteranian MenuButton" onClick={this.burgerToggle}><Link className="LinkText" to="/the_mediteranian">The Mediteranian</Link>
							</Button>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
						    <Button className="MainMenuLists tuk MenuButton" onClick={this.burgerToggle}><Link className="LinkText" to="/the_uk">The UK</Link>
						    </Button>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
							<Button className="MainMenuLists sotb MenuButton" onClick={this.burgerToggle}><Link className="LinkText" to="/south_of_the_border">South of the Border</Link>
						    </Button>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
						    <Button className="MainMenuLists tfe MenuButton" onClick={this.burgerToggle}><Link className="LinkText" to="/the_far_east">The Far East</Link>
						    </Button>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
						    <Button className="MainMenuLists tcar MenuButton" onClick={this.burgerToggle}><Link className="LinkText" to="/the_caribbean">The Caribbean</Link>
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