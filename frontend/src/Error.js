import React, { Component } from 'react';
import ErrorImg from './assets/images/error.png';
import './assets/css/error.css';

class Error extends Component {

	render() {
		return(
			<center><h2>Loading failed. Try again later</h2><img className="errorIcon" src={ErrorImg} /></center>
		);
	}
} 
export default Error;