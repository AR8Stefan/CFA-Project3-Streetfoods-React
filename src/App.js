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
        </div>
      </div>
    );
  }
}

export default App;
