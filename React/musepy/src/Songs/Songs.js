import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';



class Songs extends Component {

	render() {
		return(
			<div className="pageContent">
				<Navigation activeTab={"songs"}/> 

				<h1>Songs</h1>
				<p>fdsaafdsadsffdsadsaffasd</p>
				<PageNotFound id="adsf" category="Songs" />


				<Footer />

			</div>
		);
	}
} 
export default Songs;