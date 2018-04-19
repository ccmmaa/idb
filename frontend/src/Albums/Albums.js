import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/carousel.css';
import '../assets/css/modelpage.css';
import AlbumSlide from '../assets/images/albummodel.jpg';
import URL from '../URLHelperFunctions';
import Loading from '../assets/images/loadingHorizontal.gif';
import $ from 'jquery';
import Error from '../Error';

class Albums extends Component {

	constructor() {
		super();
		this.state = {
			model: "album",
			filterBy: "year",
			doneLoading: false,
			status: 200,
			page: URL.getPage(1),
			lastpage:1,
			sort: URL.getSortItem("album_id", ["album_id","name","artist__name","artist__gen_genre","year","producer"]),
			order: URL.getSortDirection("asc"),
			filters: URL.getFiltersInt([], [1973,1976,1979,1980,1982,1983,1987,1994,1997,2000,2002,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]),
			genres: URL.getGenres([]),
			allItems: [
				{
					"album_id": 1,
					"artist": {
						"artist_id": 1,
						"gen_genre": "Loading...",
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
		this.getPage(this.state.page);
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
		let model = this.state.model;
		let filterFieldName = this.state.filterBy;
		console.log("Request page " + pageNumber);
		var orderDirection = 'asc';
		if (!this.state.order)
			orderDirection = 'desc';
		var filterString = '';
		if (this.state.filters.length > 0 || this.state.genres.length > 0) {
			filterString = ',"filters":[';
			var filter1 = "";
			var filter2 = "";
			var index = 0;
			if (this.state.filters.length > 0) {
				filter1 = '{"or":[';
				for (var filter of this.state.filters) {
					if (index !== 0) {
						filter1 +=",";
					}
					filter1 += '{"name":"' + filterFieldName + '","op":"eq","val":"' + filter + '"}';
					index++;
				}
				filter1 += "]}";
			}
			if (this.state.genres.length > 0) {
				if (index != 0)
					filter2 += ",";
				filter2 += '{"or":[';
				index = 0;
				for (var genre of this.state.genres) {
					if (index !== 0) {
						filter2 +=",";
					}
					filter2 += '{"name":"artist","op":"has","val":{"name":"gen_genre","op":"eq","val":"' + genre + '"}}';
					index++;
				}
				filter2 += "]}";
			}
			filterString += filter1 + filter2;
			filterString += ']';
		}
		console.log('http://api.musepy.me/grid/' + model + '?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber);
		if (pageNumber > 0)
			$.ajax({
				url: 'http://api.musepy.me/grid/' + model + '?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber,
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({allItems: data["objects"], "doneLoading": true, "status": 200, "page": (pageNumber), "lastpage": data["total_pages"]});
				}.bind(this),
				error: function(xhr, status, error) {
					var state = this.state;
					state.status = xhr.status;
					this.setState(state);
				}.bind(this)
			});
	}

	paginationBar(currentPage, lastPage, scale) {
		var bar = [];
		if (currentPage!=1) {
			bar.push(<span><span onClick={() => this.getPage(1)} className="paginationClickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.prevPage()} className="paginationClickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className="paginationUnclickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
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
		if (currentPage!=lastPage) {
			bar.push(<span><span onClick={() => this.nextPage()} className="paginationClickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.getPage(this.state.lastpage)} className="paginationClickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className="paginationUnclickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span className="paginationUnclickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
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
		state.page=1;
		this.setState(state);
		this.getPage(this.state.page);
	}

	clearFilters() {
		var state = this.state;
		state.filters = [];
		state.page=1;
		this.setState(state);
		this.getPage(this.state.page);
	}

	addRemoveGenre(genre) {
		var state = this.state;
		if (!state.genres.includes(genre)) {
			state.genres.push(genre);
		}
		else {
			var index = state.genres.indexOf(genre);
			state.genres.splice(index, 1);
		}
		state.page=1;
		this.setState(state);
		this.getPage(this.state.page);
		console.log("[" + state.genres + "]");
	}

	clearGenres() {
		var state = this.state;
		state.genres = [];
		state.page=1;
		this.setState(state);
		this.getPage(this.state.page);
	}

	render() {
		window.history.replaceState("","", "/albums"+URL.encodeSortFilter(this.state, "album_id"));
		var internalContent = <center><img src={Loading} className="pageLoadingIndicator" /><p>If this page seems to load forever, try turning off the option "Use a prediction service to load pages more quickly" in Chrome's Settings>Advanced>Privacy</p></center>;
		let pagination = <p>{this.paginationBar(this.state.page, this.state.lastpage, 10)}<br />
			Page {this.state.page} out of {this.state.lastpage}</p>;
		if ((this.state.status/100)!==2 ) {
			internalContent = <Error status={this.state.status} statusText={this.state.statusText}/>;
		}
		else if (this.state.doneLoading) {
			var allItems = this.state.allItems.map(album => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
							<a className="" href={"/albums/" + album.album_id} role="button">
							<img className="rounded-circle" src={album.artwork} alt={album.name} width="140" height="140" />
							</a>
							<h2><a href={"/albums/" + album.album_id}>{album.name}</a></h2><h6>by <a href={"/artists/" + album.artist.artist_id}>{album.artist.name}</a></h6>
							<p>{album.producer}
							 <br />{album.year}<br />
							 {URL.capitalizeWords(album.artist.genre)}</p>
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
					return (<span className="clickable" onClick={() => this.addRemoveFilter(filterItems[filter])}><input type="checkbox" checked={this.state.filters.includes(filterItems[filter])}/>&nbsp;{filter}<br /></span>);
			});
			let genreItems =
			{"Country": "country",
			"Pop": "pop",
			"Trap": "trap",
			"Other": "other",
			"Hip Hop": "hip%20hop",
			"Indie": "indie",
			"Rap": "rap",
			"Metal": "metal",
			"Mexican": "mexican",
			"Funk": "funk",
			"Electronic": "electronic",
			"Jazz": "jazz",
			"Rock": "rock",
			"Latin": "latin"
			};
			let allGenres = Object.keys(genreItems).map(genre => {
				return (<span className="clickable" onClick={() => this.addRemoveGenre(genreItems[genre])}><input type="checkbox" checked={this.state.genres.includes(genreItems[genre])}/>&nbsp;{genre}<br /></span>);

			});

			internalContent = <div>
								<div className="sortAndFilter">
									<strong>Sort by</strong><br />
									{sortDropDown}&nbsp;
									{orderButton}<br/><br/>
									<strong>Year</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="clickable" onClick={() => this.clearFilters()}>clear</span><br />
									{allFilters}<br />
									<strong>Genre</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="clickable" onClick={() => this.clearGenres()}>clear</span><br />
									{allGenres}<br />
								</div>
								<div className="allThings">
									<center>
									   {allItems}
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
