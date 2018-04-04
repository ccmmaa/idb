import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/carousel.css';
import '../assets/css/modelpage.css';
import AlbumSlide from '../assets/images/albummodel.jpg';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loadingHorizontal.gif';
import $ from 'jquery';

class Albums extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
			page: 1,
			lastpage:1,
			sort: "album_id",
			order: true,
			filters: [],
			allAlbums: [
				{
					"album_id": 1,
					"artist": {
						"artist_id": 1,
						"bio": "Loading...",
						"genre": "Loading...",
						"image": "https://i.scdn.co/image/392bdc3df99b6483be4dc7e9477464bc3effaf6a",
						"name": "Loading..."
					},
					"artist_id": 1,
					"artwork": "https://i.scdn.co/image/627b725b85b62ae2953e3864146f75da6d2e309f",
					"genre": "Loading...",
					"name": "Son of Norma",
					"producer": "Dope House Records",
					"songs": [
						{
							"album_id": 1,
							"artist_id": 1,
							"itunes": "https://www.apple.com/itunes/charts/songs/",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "K Luv Vs. SPM",
							"song_id": 1,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:5EaiHel50lN4V177MFvdZ0"
						},
						{
							"album_id": 1,
							"artist_id": 1,
							"itunes": "https://www.apple.com/itunes/charts/songs/",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "People",
							"song_id": 2,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:2O8nlliwTKtcZo0KBVxvBK"
						}
					],
					"year": "2014"
				}
			]
		}
	}

	componentWillMount() {
		this.getPage(1);
	}

	prevPage() {
		if (this.state.page != 1)
		this.getPage(this.state.page - 1);
	}

	nextPage() {
		if (this.state.page != this.state.lastpage)
		this.getPage(this.state.page + 1);
	}

	getPage(pageNumber) {
		console.log("Request page " + pageNumber);
		var orderDirection = 'asc';
		if (!this.state.order)
			orderDirection = 'desc';
		var filterString = '';
		if (this.state.filters.length > 0) {
			filterString = ',"filters":[{"or":[';
			var index = 0;
			for (var filter of this.state.filters) {
				if (index !== 0) {
					filterString +=",";
				}
				filterString += '{"name":"year","op":"eq","val":"' + filter + '"}';
				index++;
				console.log(filter);
			}
			filterString += ']}]';
		}
		console.log('http://api.musepy.me/album?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber);
		if (pageNumber > 0 && pageNumber <= this.state.lastpage)
			$.ajax({
					// url: 'http://api.musepy.me/album?results_per_page=16&page=' + pageNumber,
					url: 'http://api.musepy.me/album?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber, 
					dataType: 'json',
					cache: false,
					success: function(data) {
						this.setState({"allAlbums": data["objects"], "doneLoading": true, "page": (pageNumber), "lastpage": data["total_pages"]});
					}.bind(this),
					error: function(xhr, status, error) {
						// console.log("Get ERROR: " + error);
					}
				});
	}

	paginationBar(currentPage, lastPage, scale) {
		var bar = [];
		if (currentPage!=1)
			bar.push(<span><span onClick={() => this.prevPage()} className="paginationClickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		else {
			bar.push(<span><span className="paginationUnclickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		if (currentPage < scale/2)
			for (var index = 1; index <= lastPage && index <= scale; index++) {
				bar.push(this.pageBarHelper(index, currentPage));
			}
		else if (currentPage > lastPage-scale/2) {
			var start = lastPage-scale+1;
			if (start < 1)
				start = 1;
			for (var index = start; index <= lastPage; index++) {
				bar.push(this.pageBarHelper(index, currentPage));
			}
		}
		else {
			for (var index = currentPage-scale/2+1; index <= currentPage + scale/2; index++) {
				if (index != 0)
				bar.push(this.pageBarHelper(index, currentPage));
			}
		}
		if (currentPage!=lastPage)
			bar.push(<span><span onClick={() => this.nextPage()} className="paginationClickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
		else {
			bar.push(<span><span className="paginationUnclickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		return bar;
	}
	
	pageBarHelper(index, currentPage) {
		if (index == currentPage) 
			return(<span>{index}&nbsp;&nbsp;&nbsp;</span>);
		else return(<span><span onClick={() => this.getPage(index)} className="paginationClickable orange">{index}</span>&nbsp;&nbsp;&nbsp;</span>);
	}

	changeSort(value) {
		var state = this.state;
		state.sort = value;
		this.setState(state);
		this.getPage(this.state.page);
	}

	toggleAscDec() {
		var state = this.state;
		state.order = !state.order;
		this.setState(state);
		this.getPage(this.state.page);
	}

	addRemoveFilter(filter) {
		var state = this.state;
		if (!state.filters.includes(filter)) {
			state.filters.push(filter);
		}
		else {
			var index = state.filters.indexOf(filter);
			state.filters.splice(index, 1);
		}
		// alert(state.filters);
		this.setState(state);	
		this.getPage(this.state.page);
	}

	clearFilters() {
		var state = this.state;
		state.filters = [];
		this.setState(state);
		this.getPage(this.state.page);
	}

	render() {
		var internalContent = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		let pagination = <p>{this.paginationBar(this.state.page, this.state.lastpage, 10)}<br />
			Page {this.state.page} out of {this.state.lastpage}</p>;
		if (this.state.doneLoading) {
			var allAlbums = this.state.allAlbums.map(album => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
							<img className="rounded-circle" src={album.artwork} alt={album.name} width="140" height="140" />
							<h2>{album.name}</h2><h6>by <a href={"/artists/" + album.artist_id}>{album.artist.name}</a></h6>
							<p>{album.producer}
							 <br />{album.year}<br />
							 {album.artist.genre}</p>
							<p><a className="btn btn-secondary" href={"/albums/" + album.album_id} role="button">View Album &raquo;</a></p>
						</div>
					</div>
				);
			});
			let sortDropDown = <select className="sort-drop-down" onChange={event =>this.changeSort(event.target.value)} aria-labelledby="sort_by_text" value={this.state.sort}>
									<option value="album_id">Album ID</option>
									<option value="name">Album Name</option>
									<option value="artist__name">Artist Name</option>
									<option value="artist__gen_genre">Genre</option>
									<option value="year">Released Year</option>
									<option value="producer">Producer</option>
								</select>;
			var orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9650;&nbsp;</span>
			if (this.state.order == false)
				orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9660;&nbsp;</span>
			// let allFilters = this.state.filters.map(filter => {
			// 	return(filter + ", ");
			// });
			let filterItems = {
				"1973":1973,
				"1976":1976,
				"1979":1979,
				"1980":1980,
				"1982":1982,
				"1983":1983,
				"1987":1987,
				"1994":1994,
				"1997":1997,
				"2000":2000,
				"2002":2002,
				"2004":2004,
				"2005":2005,
				"2006":2006,
				"2007":2007,
				"2008":2008,
				"2009":2009,
				"2010":2010,
				"2011":2011,
				"2012":2012,
				"2013":2013,
				"2014":2014,
				"2015":2015,
				"2016":2016,
				"2017":2017,
				"2018":2018
				};
			let allFilters = Object.keys(filterItems).map(filter => {
				if (this.state.filters.includes(filterItems[filter]))
					return (<span className="clickable" onClick={() => this.addRemoveFilter(filterItems[filter])}><input type="checkbox" checked/>&nbsp;{filter}<br /></span>);
				else {
					return(<span className="clickable" onClick={() => this.addRemoveFilter(filterItems[filter])}><input type="checkbox"/>&nbsp;{filter}<br /></span>);
				}
			});
			
			internalContent = <div>
								<div className="sortAndFilter">
									<strong>Sort by</strong><br />
									{sortDropDown}&nbsp;
									{orderButton}<br/><br/>
									<strong>Filters</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="clickable" onClick={() => this.clearFilters()}>clear</span><br />
									{allFilters}<br />
								</div>
								<div className="allThings">
									<center>
									   {allAlbums}
									</center>
								</div>
							</div>;
		}
		

		return(
			<div className="pageContent">
				<Navigation activeTab={"albums"}/>
				<main role="main">
					<div align="center">
						
						<div className="carousel-item titleImage active">
							<img className="third-slide" src={AlbumSlide} alt="Third slide" />
							<div className="container">
								<div className="carousel-caption">
									<h1><span className="orange">Discover</span> new albums.</h1>
								</div>
							</div>
						</div>	
					</div>
					
					<div className="container">
						<hr />
						<center><h1>Albums</h1></center>
						<hr />
					</div>
					<div className="container2 marketing">
						<div className="row">
							{pagination}
							
							{internalContent}

							{pagination}
						</div>
					</div>
					<div className="container">
						<hr />
					</div>

				</main>
				<Footer />
			</div>
		);
	}
} 
export default Albums;