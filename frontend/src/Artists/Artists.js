import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/modelpage.css';
import ArtistSlide from '../assets/images/artistmodel.jpg';
import URL from '../URLSpaceUnderscore';
import LoadingH from '../assets/images/loadingHorizontal.gif';
import Loading from '../assets/images/loading.gif';
import $ from 'jquery';


class Artists extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
			page: 1,
			lastpage:1,
			sort: "id",
			orderAsc: true,
			filters: [],
			allArtists:[
				{
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
					],
				}
			]
		}
	}



	getPage(pageNumber) {
		console.log("Request page " + pageNumber);
		if (pageNumber > 0 && pageNumber <= this.state.lastpage)
			$.ajax({
					url: 'http://api.musepy.me/artist?results_per_page=16&page=' + pageNumber,
					dataType: 'json',
					cache: false,
					success: function(data) {
						this.setState({"allArtists":data["objects"], "doneLoading": true, "page": (pageNumber), "lastpage": data["total_pages"]});
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
		else return(<span><span onClick={() => this.getPage(index)} className="paginationClickable">{index}</span>&nbsp;&nbsp;&nbsp;</span>);
	}

	changeSort(value) {
		var state = this.state;
		state.sort = value;
		this.setState(state);
	}

	toggleAscDec() {
		var state = this.state;
		state.order = !state.order;
		this.setState(state);
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
	}

	clearFilters() {
		var state = this.state;
		state.filters = [];
		this.setState(state);
	}

	render() {
		var internalContent = <center><img src={LoadingH} className="pageLoadingIndicator" /></center>;
		let pagination = <p>{this.paginationBar(this.state.page, this.state.lastpage, 10)}<br />
			Page {this.state.page} out of {this.state.lastpage}</p>;
		if (this.state.doneLoading) {
			var allArtists = this.state.allArtists.map(artist => {
				var bio = artist.bio.substring(0, 100) + "...";
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <img className="rounded-circle" src={artist.image} alt="Artist photo" width="140" height="140" />
						  <h2>{artist.name}</h2>
						  <p>Genre: {artist.genre}</p>
						  <p><a className="btn btn-secondary" href={"/artists/" + artist.artist_id} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
			});
			let sortDropDown = <select className="sort-drop-down" onChange={event =>this.changeSort(event.target.value)} aria-labelledby="sort_by_text" value={this.state.sort}>
									<option value="id" >ID</option>
									<option value="name">Name</option>
									<option value="genre">Genre</option>
								</select>;
			var orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9650;&nbsp;</span>
			// let allFilters = this.state.filters.map(filter => {
			// 	return(filter + ", ");
			// });
			let filterItems = {"Item1":"item1", "Item2":"item2", "Item3":"item3", "Item4":"item4", "Item5":"item5"};
			let allFilters = Object.keys(filterItems).map(filter => {
				if (this.state.filters.includes(filterItems[filter]))
					return (<span className="clickable" onClick={() => this.addRemoveFilter(filterItems[filter])}><input type="checkbox" checked/>&nbsp;{filter}<br /></span>);
				else {
					return(<span className="clickable" onClick={() => this.addRemoveFilter(filterItems[filter])}><input type="checkbox"/>&nbsp;{filter}<br /></span>);
				}
			});
			if (this.state.order == false)
				orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9660;&nbsp;</span>
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
									   {allArtists}
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