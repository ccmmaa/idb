import React, { Component } from 'react';
import {a} from 'react-router-dom';

import './assets/css/about.css';

class Navigation extends Component {
	render() {

		return(
			
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a className="navbar-brand" href="/index" target="_parent"><span class="spacer">...</span>Muse<span className="orange">Py</span></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" id="index" href="/index" target="_parent">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="songs" href="/songs/songmodel.html" target="_parent">Songs</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="artists" href="/artists/artistmodel.html" target="_parent">Artists</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" id="albums" href="/albums/albummodel.html" target="_parent">Albums</a>
						</li>
						<li className="nav-item" >
							<a className="nav-link" id="cities" href="/cities/citymodel.html" target="_parent">Cities</a>
						</li>
						<li className="nav-item" >
							<a className="nav-link" id="about" href="about" target="_parent">About</a>
						</li>
					</ul>
					<form className="form-inline mt-2 mt-md-0">
						<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0 color" type="submit">Search</button>
						<span class="spacer">....</span>
					</form>
				</div>
			</nav>
		);
	}
} 
export default Navigation;

/*
<script type="text/javascript">	
				var url = window.location.href;
				var activeID = url.substring(url.indexOf('?') + 1 );
				document.getElementById(activeID).classList.add("active");
			</script>
			*/
/*

			*/