import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';



class Albums extends Component {

	render() {
		return(
			<div className="pageContent">
				<Navigation activeTab={"albums"}/> 

				<h1>Albums</h1>
				<p>fdsaafdsadsffdsadsaffasd</p>
				
				<Footer />
			</div>
		);
	}
} 
export default Albums;