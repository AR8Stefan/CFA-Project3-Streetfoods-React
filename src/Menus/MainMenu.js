import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import './Menus.css';
import { Grid,
	Col,
	Row
	} from 'react-bootstrap';

import Mediteranian from './the_mediteranian.js'
import SouthBorder from './south_of_the_border.js'
import Uk from './the_uk.js'
import FarEast from './the_far_east.js'
import Caribbean from './the_caribbean.js'

const MenuLists = () => {
	return <Router>
		<div>

			<h1>Eat Local, Taste the World.</h1>

			<Grid>
				<Row>
					<div className="AppMenus">

						<Col className="ListCols" xs={6} md={4}>
							<div>

								<h3>The Mediteranian</h3>

								<Link className="MainMenuLists Mediteranian MenuButton LinkText" to="/the_mediteranian">
								<img src="http://res.cloudinary.com/stefank9/image/upload/v1496923382/truckmed_pgrgc3.svg" alt="" onClick={this.burgerToggle} />
							
								</Link>

								<p>Serving up foods from Spain, Italy & Greece.</p>

							</div>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
						    <div>

						    	<h3>The UK</h3>

						    	<Link className="MainMenuLists tuk MenuButton LinkText" to="/the_uk">
						    	<img src="http://res.cloudinary.com/stefank9/image/upload/v1496923382/truckuk_h0jfd0.svg" alt="" onClick={this.burgerToggle} />

						    	</Link>
						    
								<p>Serving up foods from Ireland, England, Wales & Scotland.</p>

							</div>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
							<div>

								<h3>South of the Border</h3>

								<Link className="MainMenuLists sotb MenuButton LinkText" to="/south_of_the_border">
								<img src="http://res.cloudinary.com/stefank9/image/upload/v1496923382/trucksouth_ohtjkd.svg" alt="" onClick={this.burgerToggle} />
								</Link>
						    
							    <p>Serving up foods from Mexico, Honduras, Cuba & Costa Rica.</p>

							</div>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
						    <div>

						    	<h3>The Far East</h3>

						    	<Link className="MainMenuLists tfe MenuButton LinkText" to="/the_far_east">
						    	<img src="http://res.cloudinary.com/stefank9/image/upload/v1496923382/truckeast_nvqjqo.svg" alt="" onClick={this.burgerToggle} />
						    	</Link>
						    
							    <p>Serving up foods from China, Japan, Korea, Vietnam & Thai.</p>

							</div>
						</Col>
						<Col className="ListCols" xs={6} md={4}>
						    <div>

								<h3>The Caribbean</h3>

						    	<Link className="MainMenuLists tcar MenuButton LinkText" to="/the_caribbean">
						    	<img src="http://res.cloudinary.com/stefank9/image/upload/v1496923382/truckcar_hiba0e.svg" alt="" onClick={this.burgerToggle} />
						    	</Link>
						   
						    	<p>Serving up foods from Jamaica, Barbados & Aruba.</p>
						    	
						    </div>
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