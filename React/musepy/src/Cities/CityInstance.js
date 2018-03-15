import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';



class CityInstance extends Component {

	render() {
		return(
			<div className="pageContent">
				<Navigation activeTab={"cities"}/> 

				<h1>Cities</h1>
				<p>fdsaafdsadsffdsadsaffasd</p>
				
				<Footer />

			</div>
		);
	}
} 
export default CityInstance;