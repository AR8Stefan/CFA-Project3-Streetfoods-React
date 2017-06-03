import React, { Component } from 'react';
import './App.css';
import NavComponent from './NavComponent/NavComponent.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
import MenuLists from './Menus/MainMenu.js'
import Mediteranian from './Menus/the_mediteranian.js'
import SouthBorder from './Menus/south_of_the_border.js'
import Uk from './Menus/the_uk.js'
import FarEast from './Menus/the_far_east.js'
import Caribbean from './Menus/the_caribbean.js'


const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>
);


class App extends Component {
  render() {
    return (
      <div>
        <div className='MainMap'>
          <GoogleMapReact
          apiKey= {process.env.REACT_APP_GOOGLE_API}
          defaultCenter={{lat: -33.8678500, lng: 151.2073200}}
          defaultZoom={13}
          >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'some text'}
          />
         
          </GoogleMapReact>

          <div>

           

            <Switch>
                
                </Switch>
            </div>

        </div>
      </div>
    );
  }
}

export default App;
