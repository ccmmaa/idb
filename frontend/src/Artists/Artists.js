import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/modelpage.css';
import ArtistSlide from '../assets/images/artistmodel.jpg';
import URL from '../URLHelperFunctions';
import LoadingH from '../assets/images/loadingHorizontal.gif';
import Loading from '../assets/images/loading.gif';
import $ from 'jquery';
import Error from '../Error';
import FilterHelper from '../FilterHelper';

class Artists extends Component {
	
	constructor() {
		super();
		this.state = {
			model: "artist",
			filterBy: "gen_genre",
			doneLoading: false,
			status: 200,
			page: URL.getPage(1),
			lastpage:1,
			sort: URL.getSortItem("artist_id", ["artist_id", "name", "gen_genre"]),
			order: URL.getSortDirection("asc"),
			genres: URL.getGenres([]),
			allItems:[{
					"albums": [
					],
					"artist_id": 1,
					"bio": "",
					"concerts": [
					],
					"genre": "",
					"image": "https://retchhh.files.wordpress.com/2015/03/loading10.gif?w=300&h=285",
					"name": "Loading...",
					"songs": [
					]
				}
			]
		}
	}

	getPage(pageNumber) {
		let model = this.state.model;
		let filterFieldName = this.state.filterBy;
		console.log("Request page " + pageNumber);
		var orderDirection = 'asc';
		if (!this.state.order)
			orderDirection = 'desc';
		var filterString = '';
		if (this.state.genres.length > 0) {
			filterString = ',"filters":[{"or":[';
			var index = 0;
			for (var filter of this.state.genres) {
				if (index !== 0) {
					filterString +=",";
				}
				filterString += '{"name":"' + filterFieldName + '","op":"eq","val":"' + filter + '"}';
				index++;
				console.log(filter);
			}
			filterString += ']}]';
		}
		console.log('http://api.musepy.me/grid/' + model + '?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber);
		if (pageNumber > 0) {
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
		else return(<span><span onClick={() => this.getPage(index)} className="paginationClickable">{index}</span>&nbsp;&nbsp;&nbsp;</span>);
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
		window.history.replaceState("","", "/artists"+URL.encodeSortFilter(this.state, "artist_id"));
		var internalContent = <center><img src={LoadingH} className="pageLoadingIndicator" /><p>If this page seems to load forever, try turning off the option "Use a prediction service to load pages more quickly" in Chrome's Settings>Advanced>Privacy</p></center>;
		let pagination = <p>{this.paginationBar(this.state.page, this.state.lastpage, 10)}<br />
			Page {this.state.page} out of {this.state.lastpage}</p>;
		if (Math.floor(this.state.status/100)!==2 ) {
			internalContent = <Error status={this.state.status} statusText={this.state.statusText}/>;
		}
		else if (this.state.doneLoading) {
			var allItems = this.state.allItems.map(artist => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <a className="" href={"/artists/" + artist.artist_id} role="button">
						  <img className="rounded-circle" src={artist.image} alt="Artist photo" width="140" height="140" />
						  </a>
						  <h2><a href={"/artists/" + artist.artist_id}>{artist.name}</a></h2>
						  <p>Genre: {URL.capitalizeWords(artist.genre)}</p>
						  <p><a className="btn btn-secondary" href={"/artists/" + artist.artist_id} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
			});
			if (this.state.allItems.length === 0) {
				allItems = <h2 className="no_results">No results.</h2>;
			}
			let sortDropDown = <select className="sort-drop-down" onChange={event =>this.changeSort(event.target.value)} aria-labelledby="sort_by_text" value={this.state.sort}>
									<option value="artist_id" >ID</option>
									<option value="name">Name</option>
									<option value="gen_genre">Genre</option>
								</select>;
			var orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9650;&nbsp;</span>
			if (this.state.order == false)
				orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9660;&nbsp;</span>
			let genreItems = FilterHelper.genresDict();;
			let allGenres = Object.keys(genreItems).map(genre => {
				return (<span className="clickable" onClick={() => this.addRemoveGenre(genreItems[genre])}><input type="checkbox" checked={this.state.genres.includes(genreItems[genre])}/>&nbsp;{genre}<br /></span>);
			});
			internalContent = 
				<div>
					<div className="sortAndFilter">
						<strong>Sort by</strong><br />
						{sortDropDown}&nbsp;
						{orderButton}<br/><br/>
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
				<Navigation activeTab={"artists"}/>

				<main role="main">
					<div align="center">
						<div className="carousel-item titleImage active">
							<img className="second-slide" src={ArtistSlide} alt="Second slide"/>
							<div className="container">
								<div className="carousel-caption">
									<h1><span className="orange">Explore</span> your favorite artists.</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<hr/>
						<center><h1>Artists</h1></center>
						<hr/>
					</div>
					<div className="container2 marketing">
						<div className="row">
							{pagination}

							{internalContent}

							{pagination}
						</div>
					</div>

					<div className="container">
						<hr/>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}
export default Artists;
