import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Menu1 from './Menu1/Menu1.js';
import Menu2 from './Menu2/Menu2.js';
import Menu3 from './Menu3/Menu3.js';
import Menu4 from './Menu4/Menu4.js';
import Menu5 from './Menu5/Menu5.js';

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
      <div className='MainMap'>
        <GoogleMapReact
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
    );
  }
}

export default App;
