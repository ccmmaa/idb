import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/modelpage.css';
import SongSlide from '../assets/images/songmodel.jpg';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loadingHorizontal.gif';
import $ from 'jquery';


class Songs extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
			page: 1,
			lastpage:1,
			sort: "song_id",
			order: true,
			filters: [],
			allSongs:[
				{
					"Album": {
						"album_id": 1,
						"artist_id": 1,
						"artwork": "https://i.scdn.co/image/6648942a9d93699f0b7c06267ef66d462669ceb7",
						"genre": "Loading...",
						"name": "Loading...",
						"producer": "Loading...",
						"year": "Loading..."
					},
					"album_id": 1,
					"artist": {
						"artist_id": 1,
						"bio": "Loading...",
						"genre": "Loading...",
						"image": "https://i.scdn.co/image/81de8d707c6dc167c5d7f6c46cd02686bfdbd04b",
						"name": "Loading..."
					},
					"artist_id": 1,
					"city": {
						"city_id": 1,
						"image": "http://www.celebrityslice.com/wp-content/uploads/2015/08/city-wallpaper-7.jpg",
						"name": "Loading...",
						"playlist": "https://open.spotify.com/user/thesoundsofspotify/playlist/3gz7G6lax8nkXZ3vBr3n4i",
						"state": "Loading..."
					},
					"city_id": 1,
					"itunes": "https://itunes.apple.com/us/album/cody-canada-tells-it-like-it-is-live/1160443435?i=1160443744&uo=4",
					"lyrics": "Loading...",
					"name": "Loading...",
					"song_id": 1,
					"spotify": "https://open.spotify.com/embed?uri=spotify:track:65Z8nMFjEc3DBRwKMduBzr"
				}
			]
		}
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
				filterString += '{"name":"city_id","op":"eq","val":"' + filter + '"}';
				index++;
				console.log(filter);
			}
			filterString += ']}]';
		}
		console.log('http://api.musepy.me/song?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber);
		if (pageNumber > 0 && pageNumber <= this.state.lastpage)
			$.ajax({
					// url: 'http://api.musepy.me/song?results_per_page=16&page=' + pageNumber,
					url: 'http://api.musepy.me/song?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber, 
					dataType: 'json',
					cache: false,
					success: function(data) {
						this.setState({"allSongs": data["objects"], "doneLoading": true, "page": (pageNumber), "lastpage": data["total_pages"]});
					}.bind(this),
					error: function(xhr, status, error) {
						// console.log("Get ERROR: " + error);
					}
				});
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
			 var allSongs = this.state.allSongs.map(song => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <img className="rounded-circle" src={song["Album"]["artwork"]} alt="Generic placeholder image" width="140" height="140" />
						  <h2>{song["name"]}</h2><h6>by <a href={"/artists/" + song["artist"]["artist_id"]}>{song["artist"]["name"]}</a></h6>
						  <span><a href={"/albums/" + song.album_id}>{song.Album.name}</a>, {song.Album.year}<br />
						  {URL.capitalizeWords(song.artist.genre)}<br />{song["city"]["name"]}</span>
						  <p><a className="btn btn-secondary" href={"/songs/" + song["song_id"]} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
			});
			let sortDropDown = <select className="sort-drop-down" onChange={event =>this.changeSort(event.target.value)} aria-labelledby="sort_by_text" value={this.state.sort}>
									<option value="song_id" >ID</option>
									<option value="name">Title</option>
									<option value="Album__name">Album Name</option>
									<option value="Album__year">Album Year</option>
									<option value="artist__gen_genre">Artist Genre</option>
									<option value="artist__name">Artist Name</option>
								</select>;
			var orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9650;&nbsp;</span>
			if (this.state.order == false)
				orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9660;&nbsp;</span>
			// let allFilters = this.state.filters.map(filter => {
			// 	return(filter + ", ");
			// });
			let filterItems = {
				"Atlanta":"4",
				"Austin":"1", 
				"Boston":"8",
				"Charlotte":"21",
				"Chicago":"19",
				"Columbus":"14",
				"Dallas":"3",
				"Denver":"10",
				"Houston":"2", 
				"Indianapolis":"12",
				"Jacksonville":"11",
				"Los Angeles":"7",
				"Memphis":"15",
				"Miami":"18",
				"Minneapolis":"5",
				"Oakland":"22",
				"Philadelphia":"16",
				"Phoenix":"17",
				"Portland":"20",
				"San Antonio":"9",
				"San Diego":"6",
				"Seattle":"13"
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
									   {allSongs}
									</center>
								</div>
							</div>;
		}
		
		return(
			<div className="pageContent">
				<Navigation activeTab={"songs"}/> 

				<main role="main">
					<div align="center">
						
						<div className="carousel-item titleImage active">
							<img className="first-slide" src={SongSlide} alt="First slide" />
							<div className="container">
								<div className="carousel-caption text-left">
									<h1><span className="orange">Search</span> your city's top songs.</h1>
								</div>
							</div>
						</div>
					</div>
					
					<div className="container">
						<hr />
						<center><h1>Songs</h1></center>
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
export default Songs;