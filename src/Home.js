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
import App from './App.js';

const Home = () => {
	return <div>
		<App></App>
		<h1>Home texthappy</h1>
	</div>
}

export default Home;