import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';



class ArtistInstance extends Component {

	render() {
		return(
			<div className="pageContent">
				<Navigation activeTab={"artists"}/> 

				<h1>Artist Instance</h1>
				<p>fdsaafdsadsffdsadsaffasd</p>
				
				<Footer />

			</div>
		);
	}
} 
export default ArtistInstance;