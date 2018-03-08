import React, { Component } from 'react';
import {a} from 'react-router-dom';
import NavTabItem from './NavTabItem';

import '../assets/css/about.css';

class Navigation extends Component {
	
	render() {
		const tabs = [ 
			{"id": "index", "href": "/index", "text": "Home"},
			{"id": "songs", "href": "/songs/songmodel.html", "text": "Songs"},
			{"id": "artists", "href": "/artists/artistmodel.html", "text": "Artists"},
			{"id": "albums", "href": "/albums/albummodel.html", "text": "Albums"},
			{"id": "cities", "href": "/cities/citymodel.html", "text": "Cities"},
			{"id": "about", "href": "about", "text": "About"}
		];
		let tabItems = tabs.map(tab => {
			return(
				<NavTabItem key={tab.id} tab={tab} activeTab={this.props.activeTab} />
			);
		})

		return(
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a className="navbar-brand" href="/index" target="_parent"><span className="spacer">...</span>Muse<span className="orange">Py</span></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">

						{tabItems}

					</ul>
					<form className="form-inline mt-2 mt-md-0">
						<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0 color" type="submit">Search</button>
						<span className="spacer">....</span>
					</form>
				</div>
			</nav>
		);
	}
} 
export default Navigation;
