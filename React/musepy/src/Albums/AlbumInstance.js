import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';



class AlbumInstance extends Component {

	render() {
		return(
			<div className="pageContent">
				<Navigation activeTab={"albums"}/> 

				<h1>AlbumInstance</h1>
				<p>fdsaafdsadsffdsadsaffasd</p>
				
				<Footer />
			</div>
		);
	}
} 
export default AlbumInstance;