import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/carousel.css';
import '../assets/css/modelpage.css';
import './search.css';
import URL from '../URLHelperFunctions';
import Highlighter from 'react-highlight-words';
import $ from 'jquery';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			query: URL.convert(URL.getSearchQuery(), "+", " "),
			doneLoadingAlbum: false,
			doneLoadingArtist: false,
			doneLoadingSongs: false,
			doneLoadingCity: false,
			pageAlbum: 1,
			pageArtist: 1,
			pageSong: 1,
			pageCity: 1,
			lastpageAlbum:1,
			lastpageArtist:1,
			lastpageSong:1,
			lastpageCity:1,
			albumData: [],
			artistData: [],
			songData:[],
			cityData:[]
		};
	}

	componentWillMount() {
		this.getAlbums(1);
		this.getArtists(1);
		this.getSongs(1);
		this.getCities(1);
	}

	prevPageAlbum() {
		if (this.state.pageAlbum !== 1)
		this.getAlbums(this.state.pageAlbum - 1);
	}

	nextPageAlbum() {
		if (this.state.pageAlbum !== this.state.lastpageAlbum)
		this.getAlbums(this.state.pageAlbum + 1);
	}

	prevPageArtist() {
		if (this.state.pageArtist !== 1)
		this.getArtists(this.state.pageArtist - 1);
	}

	nextPageArtist() {
		if (this.state.pageArtist !== this.state.lastpageArtist)
		this.getArtists(this.state.pageArtist + 1);
	}

	prevPageSong() {
		if (this.state.pageSong !== 1)
		this.getSongs(this.state.pageSong - 1);
	}

	nextPageSong() {
		if (this.state.pageSong !== this.state.lastpageSong)
		this.getSongs(this.state.pageSong + 1);
	}

	prevPageCity() {
		if (this.state.pageCity !== 1)
		this.getCities(this.state.pageCity - 1);
	}

	nextPageCity() {
		if (this.state.pageCity !== this.state.lastpageCity)
		this.getCities(this.state.pageCity + 1);
	}

	getAlbums(pageNumber) {
		console.log("Request page " + pageNumber);
		let url = encodeURI('http://api.musepy.me/album?results_per_page=8&page=' + pageNumber + '&q={"filters":[{"or":[{"name":"name","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}, {"name":"year","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}, {"name":"producer","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}]}]}');
		if (pageNumber > 0 && pageNumber <= this.state.lastpageAlbum) {
			$.ajax({
				url: url,
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"albumData": data["objects"], "doneLoadingAlbum": true, "pageAlbum": (pageNumber), "lastpageAlbum": data["total_pages"]});
				}.bind(this),
				error: function(xhr, status, error) {
					console.log(xhr);
				}
			});
		}
	}

	getArtists(pageNumber) {
		console.log("Request page " + pageNumber);
		let url = encodeURI('http://api.musepy.me/artist?results_per_page=8&page=' + pageNumber + '&q={"filters":[{"or":[{"name":"name","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}, {"name":"bio","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}, {"name":"genre","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}]}]}');
		if (pageNumber > 0 && pageNumber <= this.state.lastpageArtist) {
			$.ajax({
				url: url,
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"artistData": data["objects"], "doneLoadingArtist": true, "pageArtist": (pageNumber), "lastpageArtist": data["total_pages"]});
				}.bind(this),
				error: function(xhr, status, error) {
					console.log(xhr);
				}
			});
		}
	}

	getSongs(pageNumber) {
		console.log("Request page " + pageNumber);
		let url = encodeURI('http://api.musepy.me/song?results_per_page=8&page=' + pageNumber + '&q={"filters":[{"or":[{"name":"name","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}, {"name":"lyrics","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}]}]}');
		if (pageNumber > 0 && pageNumber <= this.state.lastpageSong) {
			$.ajax({
				url: url,
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"songData": data["objects"], "doneLoadingSong": true, "pageSong": (pageNumber), "lastpageSong": data["total_pages"]});
				}.bind(this),
				error: function(xhr, status, error) {
				console.log(xhr);
				}
			});
		}
	}

	getCities(pageNumber) {
		console.log("Request page " + pageNumber);
		let url = encodeURI('http://api.musepy.me/city?results_per_page=8&page=' + pageNumber + '&q={"filters":[{"or":[{"name":"name","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}, {"name":"state","op":"like","val":"%' + URL.convert(this.state.query, " ", "+") + '%"}]}]}');
		if (pageNumber > 0 && pageNumber <= this.state.lastpageCity) {
			$.ajax({
				url: url,
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"cityData": data["objects"], "doneLoadingCity": true, "pageCity": (pageNumber), "lastpageCity": data["total_pages"]});
				}.bind(this),
				error: function(xhr, status, error) {
					console.log(xhr);
				}
			});
		}
	}

	paginationBarAlbum(currentPage, lastPage, scale) {
		var bar = [];
		if (currentPage!==1) {
			bar.push(<span><span onClick={() => this.getAlbums(1)} className = "paginationClickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.prevPageAlbum()} className = "paginationClickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className = "paginationUnclickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span className = "paginationUnclickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		if (currentPage < scale/2)
			for (var index = 1; index <= lastPage && index <= scale; index++) {
				bar.push(this.pageBarHelperAlbum(index, currentPage));
			}
		else if (currentPage > lastPage-scale/2) {
			var start = lastPage-scale+1;
			if (start < 1)
				start = 1;
			for (var index = start; index <= lastPage; index++) {
				bar.push(this.pageBarHelperAlbum(index, currentPage));
			}
		}
		else {
			for (var index = currentPage-scale/2+1; index <= currentPage + scale/2; index++) {
				if (index !== 0)
				bar.push(this.pageBarHelperAlbum(index, currentPage));
			}
		}
		if (currentPage<lastPage) {
			bar.push(<span><span onClick={() => this.nextPageAlbum()} className = "paginationClickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.getAlbums(this.state.lastpageAlbum)} className = "paginationClickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className = "paginationUnclickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span className = "paginationUnclickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		return bar;
	}

	pageBarHelperAlbum(index, currentPage) {
		if (index === currentPage)
			return(<span>{index}&nbsp;&nbsp;&nbsp;</span>);
		else return(<span><span onClick={() => this.getAlbums(index)} className = "paginationClickable">{index}</span>&nbsp;&nbsp;&nbsp;</span>);
	}

	paginationBarArtist(currentPage, lastPage, scale) {
		var bar = [];
		if (currentPage!==1) {
			bar.push(<span><span onClick={() => this.getArtists(1)} className = "paginationClickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.prevPageArtist()} className = "paginationClickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className = "paginationUnclickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span className = "paginationUnclickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		if (currentPage < scale/2)
			for (var index = 1; index <= lastPage && index <= scale; index++) {
				bar.push(this.pageBarHelperArtist(index, currentPage));
			}
		else if (currentPage > lastPage-scale/2) {
			var start = lastPage-scale+1;
			if (start < 1)
				start = 1;
			for (var index = start; index <= lastPage; index++) {
				bar.push(this.pageBarHelperArtist(index, currentPage));
			}
		}
		else {
			for (var index = currentPage-scale/2+1; index <= currentPage + scale/2; index++) {
				if (index !== 0)
				bar.push(this.pageBarHelperArtist(index, currentPage));
			}
		}
		if (currentPage<lastPage) {
			bar.push(<span><span onClick={() => this.nextPageArtist()} className = "paginationClickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.getArtists(this.state.lastpageArtist)} className = "paginationClickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className = "paginationUnclickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span className = "paginationUnclickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		return bar;
	}

	pageBarHelperArtist(index, currentPage) {
		if (index === currentPage)
			return(<span>{index}&nbsp;&nbsp;&nbsp;</span>);
		else return(<span><span onClick={() => this.getArtists(index)} className = "paginationClickable">{index}</span>&nbsp;&nbsp;&nbsp;</span>);
	}

	paginationBarSong(currentPage, lastPage, scale) {
		var bar = [];
		if (currentPage!==1) {
			bar.push(<span><span onClick={() => this.getSongs(1)} className = "paginationClickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.prevPageSong()} className = "paginationClickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className = "paginationUnclickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span className = "paginationUnclickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		if (currentPage < scale/2)
			for (var index = 1; index <= lastPage && index <= scale; index++) {
				bar.push(this.pageBarHelperSong(index, currentPage));
			}
		else if (currentPage > lastPage-scale/2) {
			var start = lastPage-scale+1;
			if (start < 1)
				start = 1;
			for (var index = start; index <= lastPage; index++) {
				bar.push(this.pageBarHelperSong(index, currentPage));
			}
		}
		else {
			for (var index = currentPage-scale/2+1; index <= currentPage + scale/2; index++) {
				if (index !== 0)
				bar.push(this.pageBarHelperSong(index, currentPage));
			}
		}
		if (currentPage<lastPage) {
			bar.push(<span><span onClick={() => this.nextPageSong()} className = "paginationClickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.getSongs(this.state.lastpageSong)} className = "paginationClickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className = "paginationUnclickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span className = "paginationUnclickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		return bar;
	}

	pageBarHelperSong(index, currentPage) {
		if (index === currentPage)
			return(<span>{index}&nbsp;&nbsp;&nbsp;</span>);
		else return(<span><span onClick={() => this.getSongs(index)} className = "paginationClickable">{index}</span>&nbsp;&nbsp;&nbsp;</span>);
	}

	paginationBarCity(currentPage, lastPage, scale) {
		var bar = [];
		if (currentPage!==1) {
			bar.push(<span><span onClick={() => this.getCities(1)} className = "paginationClickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.prevPageCity()} className = "paginationClickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className = "paginationUnclickable">{"<< First"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span className = "paginationUnclickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		if (currentPage < scale/2)
			for (var index = 1; index <= lastPage && index <= scale; index++) {
				bar.push(this.pageBarHelperCity(index, currentPage));
			}
		else if (currentPage > lastPage-scale/2) {
			var start = lastPage-scale+1;
			if (start < 1)
				start = 1;
			for (var index = start; index <= lastPage; index++) {
				bar.push(this.pageBarHelperCity(index, currentPage));
			}
		}
		else {
			for (var index = currentPage-scale/2+1; index <= currentPage + scale/2; index++) {
				if (index !== 0)
				bar.push(this.pageBarHelperCity(index, currentPage));
			}
		}
		if (currentPage<lastPage) {
			bar.push(<span><span onClick={() => this.nextPageCity()} className = "paginationClickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span onClick={() => this.getCities(this.state.lastpageCity)} className = "paginationClickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		else {
			bar.push(<span><span className = "paginationUnclickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
			bar.push(<span><span className = "paginationUnclickable">{"Last >>"}</span>&nbsp;&nbsp;&nbsp;</span>);
		}
		return bar;
	}

	pageBarHelperCity(index, currentPage) {
		if (index === currentPage)
			return(<span>{index}&nbsp;&nbsp;&nbsp;</span>);
		else return(<span><span onClick={() => this.getCities(index)} className = "paginationClickable">{index}</span>&nbsp;&nbsp;&nbsp;</span>);
	}

	handleAddSearch(query){
		console.log(query);
	}

	render() {
		console.log(this.props.query)
		if (this.state.doneLoadingAlbum) {
			var allAlbums = this.state.albumData.map(album => {
				return(
					<div className = "card-shadows-orange model-cards modelCard">
						<div className = "ingrid" text-align="center">
							<img className = "rounded-circle" src={album.artwork} alt = {album.name} width="140" height="140" />
							<h2><a href = {"/albums/" + album.album_id}>
							<Highlighter
								highlightStyle = {{padding: '0em'}}
								searchWords = {[this.state.query]}
								autoEscape = {true}
								textToHighlight = {album.name}
							/></a></h2>
							<h6>By <a href = {"/artists/" + album.artist_id}>
							<Highlighter
								highlightStyle = {{padding: '0em'}}
								searchWords = {[this.state.query]}
								autoEscape = {true}
								textToHighlight = {album.artist.name}
							/></a></h6>
						</div>
					</div>
				);
		});
		if (this.state.albumData.length === 0){
			allAlbums = <h5> No results found. </h5>
		}
	}
	else {
		allAlbums = <h5>Loading...</h5>
	}

	if (this.state.doneLoadingArtist) {
		var allArtists = this.state.artistData.map(artist => {
			return(
				<div className = "card-shadows-orange model-cards modelCard">
					<div className = "ingrid" text-align="center">
						<img className = "rounded-circle" src={artist.image} alt="Artist photo" width="140" height="140" />
						<h2><a href = {"/artists/" + artist.artist_id}><Highlighter
							highlightStyle = {{padding: '0em'}}
							searchWords = {[this.state.query]}
							autoEscape = {true}
							textToHighlight = {artist.name}
						/></a></h2>
						<p>Genre: <Highlighter
							highlightStyle = {{padding: '0em'}}
							searchWords = {[this.state.query]}
							autoEscape = {true}
							textToHighlight = {artist.genre}
						/></p>
						<p className = "scrollInfo"><Highlighter
							highlightStyle = {{padding: '0em'}}
							searchWords = {[this.state.query]}
							autoEscape = {true}
							textToHighlight = {artist.bio}
						/></p>
					</div>
				</div>
 			);
 		});
		if (this.state.artistData.length === 0){
			allArtists = <h5> No results found. </h5>
		}
	}
	else {
		allArtists = <h5>Loading...</h5>
	}

	if (this.state.doneLoadingSong) {
		var allSongs = this.state.songData.map(song => {
			return(
				<div className = "card-shadows-orange model-cards modelCard">
					<div className = "ingrid" text-align="center">
						<img className = "rounded-circle" src={song["album"]["artwork"]} alt="Generic placeholder image" width="140" height="140" />
						<h2><a href = {"/songs/" + song["song_id"]} role = "button"><Highlighter
							highlightStyle = {{padding: '0em'}}
							searchWords = {[this.state.query]}
							autoEscape = {true}
							textToHighlight = {song["name"]}
						/></a></h2>
						<h6>By <a href = {"/artists/" + song["artist"]["artist_id"]}><Highlighter
							highlightStyle = {{padding: '0em'}}
							searchWords = {[this.state.query]}
							autoEscape = {true}
							textToHighlight = {song["artist"]["name"]}
						/></a></h6><br />
						<p className = "scrollInfo"><Highlighter
							highlightStyle = {{padding: '0em'}}
							searchWords = {[this.state.query]}
							autoEscape = {true}
							textToHighlight = {song["lyrics"]}
						/></p>

					</div>
				</div>
			);
		});
		if (this.state.songData.length === 0){
			allSongs = <h5> No results found. </h5>
		}
	}
	else {
		allSongs = <h5>Loading...</h5>
	}
	if (this.state.doneLoadingCity) {
		var allCities = this.state.cityData.map(city => {
			if (city.name !== "n/a") {
				return(
					<div className = "card-shadows-orange model-cards modelCard">
						<div className = "ingrid" text-align="center">
							<img className = "rounded-circle" src={city["image"]} alt="Generic placeholder image" width="140" height="140" />
							<h2><a href = {"/cities/" + city["city_id"]}><Highlighter
								highlightStyle = {{padding: '0em'}}
								searchWords = {[this.state.query]}
								autoEscape = {true}
								textToHighlight = {city["name"]}
							/></a></h2>
							<p><Highlighter
								highlightStyle = {{padding: '0em'}}
								searchWords = {[this.state.query]}
								autoEscape = {true}
								textToHighlight = {city["state"]}
							/></p>
						</div>
					</div>
		 		);
			}
		});
		if (this.state.cityData.length === 0){
			allCities = <h5> No results found. </h5>
		}
	}
	else {
		allCities = <h5>Loading...</h5>
	}

	let paginationAlbum = <p>{this.paginationBarAlbum(this.state.pageAlbum, this.state.lastpageAlbum, 10)}</p>;
	let paginationArtist = <p>{this.paginationBarArtist(this.state.pageArtist, this.state.lastpageArtist, 10)}</p>;
	let paginationSong = <p>{this.paginationBarSong(this.state.pageSong, this.state.lastpageSong, 10)}</p>;
	let paginationCity= <p>{this.paginationBarCity(this.state.pageCity, this.state.lastpageCity, 10)}</p>;

	return(
		<div className = "pageContent">
			<Navigation query={this.state.query}/>
				<div className = "container">
					<hr />
					<center><h1>Search</h1></center>
					<hr />
				</div>
				<div className = "container2 marketing">
					<div className = "row">
						<center><h3>Album Results</h3></center>
						{allAlbums}
						{paginationAlbum}
						<div className = "container">
							<hr />
						</div>

						<center><h3>Artist Results</h3></center>
						{allArtists}
						{paginationArtist}
						<div className = "container">
							<hr />
						</div>

						<center><h3>Song Results</h3></center>
						{allSongs}
						{paginationSong}
						<div className = "container">
							<hr />
						</div>

		  				<center><h3>City Results</h3></center>
						{allCities}
						{paginationCity}
					</div>
				</div>
				<div className = "container">
					<hr />
				</div>

				<Footer />
			</div>
		);
	}
}
export default Search;