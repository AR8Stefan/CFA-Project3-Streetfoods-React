import React from 'react';
// import ReactDOM from 'react-dom';
import Counter from './counter.js'
import appState from './counter.js'
// import { Well, Grid, Col, Row } from 'react-bootstrap';
// import Home from '../Home.js'

const Mediteranian = () => {
	return <div>
			<h1>text Menu</h1>
			<Counter store={appState} />
		</div>

}

export default Mediteranian;