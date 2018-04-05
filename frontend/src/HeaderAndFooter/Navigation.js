import React, { Component } from 'react';
import {a} from 'react-router-dom';
import NavTabItem from './NavTabItem';

class Navigation extends Component {
	constructor(){
		super();
		this.state = {
			queryInput: ""
		}
	}

	handleSearch(e){
		if(this.refs.input.value === ""){
			alert('Search input must not be empty.');
		} else if(this.refs.input.value.includes('%')){
			alert('"%" is not an allowed character.');
		} else {
			this.setState({queryInput:this.refs.input.value}, function(){
				window.location = '/search?q=' + this.state.queryInput;			});
		}
		e.preventDefault();
	}

	render() {
		const tabs = [
			{"id": "index", "href": "/index", "text": "Home"},
			{"id": "songs", "href": "/songs", "text": "Songs"},
			{"id": "artists", "href": "/artists", "text": "Artists"},
			{"id": "albums", "href": "/albums", "text": "Albums"},
			{"id": "cities", "href": "/cities", "text": "Cities"},
			{"id": "about", "href": "/about", "text": "About"}
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
					<form className="form-inline mt-2 mt-md-0" onSubmit={this.handleSearch.bind(this)}>
						<input id="searchField" className="form-control mr-sm-2" ref="input" type="text" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0 color" type="submit">Search</button>
						<span className="spacer">....</span>
					</form>
				</div>
			</nav>
		);
	}
}
export default Navigation;
