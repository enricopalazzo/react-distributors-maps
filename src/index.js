import 'core-js/shim';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*
    TODO: Add this as props 
    dataRoute={"URL OF WP REST API WITH LIST OF DISTRIBUTORS "}
    statesRoute={"URL OF WP REST API WITH LIST OF STATES "}
    zonaRoute={"URL OF WP REST API WITH LIST OF ZONES "}
     mapaRoute={"PATH OF THE SVG MAP "}
*/
ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();

