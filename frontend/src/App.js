import React, { Component } from 'react';
import Router from './Router';
import { Link } from 'react-router';
import './assets/css/bootstrap.min.css'; 
import './assets/css/main.css';

class App extends Component {

	render() {
		//Set change the state of the "activeTab" to change which tab is highlighted
		return (
			<div className="">
				<Router />
			</div>
		);
	}
}

export default App;