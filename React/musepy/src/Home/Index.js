import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';



class Index extends Component {

	render() {
		return(
			<div className="pageContent">
				<Navigation activeTab={"index"}/> 

				<h1>Home</h1>
				<p>fdsaafdsadsffdsadsaffasd</p>
				
				<Footer />

			</div>
		);
	}
} 
export default Index;