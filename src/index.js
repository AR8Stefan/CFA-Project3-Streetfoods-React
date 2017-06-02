import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import NavComponent from './NavComponent/NavComponent.js'

ReactDOM.render(<NavComponent />, document.getElementById('root'));
registerServiceWorker();
