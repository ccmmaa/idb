import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';


class About extends Component {

	render() {
		console.log(this);
		return(
			<div className="pageContent">
				<Navigation activeTab={"about"}/> 

				<h1>About</h1>
				<p>fdsaafdsadsffdsadsaffasd</p>
			</div>
		);
	}
} 
export default About;