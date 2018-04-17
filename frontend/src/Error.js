import React, { Component } from 'react';
import ErrorImg from './assets/images/error.png';
import './assets/css/error.css';
import NotFound from './assets/images/NotFound.png';

class Error extends Component {

	render() {
		var status = this.props.status;
		var message = this.props.statusText;

		var image = ErrorImg;
		// alert(status);
		if (status === 404) {
			image = NotFound;
			message = "The Requested Resource cannot be found";
		}
		else if (status == 400) {
			image = NotFound;
			message = "Bad Request";
		}
		else if (status== undefined) {
			status = 0;
			// alert("Undefined Status");
			message = "The requested URL can't be reached. The service took too long to respond.";
		}
		
		return(
			<center><h2>({status}) {message}</h2><img className="errorIcon" src={image} /></center>
		);	
	
		
	}
} 
export default Error;