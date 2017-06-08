import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
// import NavComponent from './NavComponent/NavComponent.js'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
import GoogleMapMarkers from 'google-map-react';

import MenuLists from './Menus/MainMenu.js'
// import Mediteranian from './Menus/the_mediteranian.js'
// import SouthBorder from './Menus/south_of_the_border.js'
// import Uk from './Menus/the_uk.js'
// import FarEast from './Menus/the_far_east.js'
// import Caribbean from './Menus/the_caribbean.js'


const AnyReactComponent = ({text}) => (
  
  <GoogleMapMarkers className="Marker" onClick={this.burgerToggle}><Link className="LinkText" to="/menus/mainmenu"><Button>{text}</Button></Link>
  </GoogleMapMarkers>

);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div>
          <div className='MainMap'>
            <GoogleMapReact
            apiKey= {process.env.REACT_APP_GOOGLE_API}
            defaultCenter={{lat: 34.052235, lng: -118.243683}}
            defaultZoom={9}
            >
            <AnyReactComponent
              lat={34.113319}
              lng={-118.008499}
              text={'The Mediteranian'}
            />
            <AnyReactComponent
              lat={34.012123}
              lng={-118.239731}
              text={'The UK'}
            />
            <AnyReactComponent
              lat={33.915873}
              lng={-118.044213}
              text={'The Far East'}
            />
            <AnyReactComponent
              lat={34.050244}
              lng={-118.419121}
              text={'South of the Boarder'}
            />
            <AnyReactComponent
              lat={34.130992}
              lng={-118.202141}
              text={'The Caribbean'}
            />

            </GoogleMapReact>

          </div>


        </div>

      <MenuLists />

      </div>
    );
  }
}

export default App;
