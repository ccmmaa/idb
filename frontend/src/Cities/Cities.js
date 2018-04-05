import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/modelpage.css';
import CitySlide from '../assets/images/citymodel.jpg';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loadingHorizontal.gif';
import $ from 'jquery';

class Cities extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
			page: URL.getPage(1),
			lastpage:1,
			sort: URL.getSortItem("city_id", ["city_id","name","state"]),
			order: URL.getSortDirection("asc"),
			filters: URL.getFilters([], ["Arizona","California","Colorado","Florida","Georgia","Illinois","Indiana","Massachusetts","Minnesota","North%20Carolina","Ohio","Oregon","Pennsylvania","Tennessee","Texas","Washington"]),
			allCities:[ 
				{
					"city_id": 1,
					"concerts": [],
					"image": "http://www.celebrityslice.com/wp-content/uploads/2015/08/city-wallpaper-7.jpg",
					"name": "Loading...",
					"playlist": "https://open.spotify.com/user/thesoundsofspotify/playlist/3gz7G6lax8nkXZ3vBr3n4i",
					"songs": [],
					"state": "Loading..."
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
		console.log("Request page " + pageNumber);
		var orderDirection = 'asc';
		var filterString = '';
		if (this.state.filters.length > 0) {
			filterString = ',"filters":[{"or":[';
			var index = 0;
			for (var filter of this.state.filters) {
				if (index !== 0) {
					filterString +=",";
				}
				filterString += '{"name":"state","op":"eq","val":"' + filter + '"}';
				index++;
				console.log(filter);
			}
			filterString += ']}]';
		}
		console.log('http://api.musepy.me/city?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber);
		if (!this.state.order)
			orderDirection = 'desc';
		if (pageNumber > 0)
			$.ajax({
					// url: 'http://api.musepy.me/city?results_per_page=16&page=' + pageNumber,
					url: 'http://api.musepy.me/grid/city?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber, 
					dataType: 'json',
					cache: false,
					success: function(data) {
						this.setState({"allCities": data["objects"], "doneLoading": true, "page": (pageNumber), "lastpage": data["total_pages"]});
					}.bind(this),
					error: function(xhr, status, error) {
						// console.log("Get ERROR: " + error);
					}
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

	render() {
		window.history.pushState("","", "/cities"+URL.encodeSortFilter(this.state, "city_id"));
		var internalContent = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading) {
			var allCities = this.state.allCities.map(city => {
				if (city.name != "n/a") {
					return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <a className="btn btn-secondary" href={"/cities/" + city["city_id"]} role="button">
						  <img className="rounded-circle" src={city["image"]} alt="Generic placeholder image" width="140" height="140" />
						  </a>
						  <h2>{city["name"]}</h2><p>{city["state"]}</p>
						  <p><a className="btn btn-secondary" href={"/cities/" + city["city_id"]} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
				}
			});
			let sortDropDown = <select className="sort-drop-down" onChange={event =>this.changeSort(event.target.value)} aria-labelledby="sort_by_text" value={this.state.sort}>
									<option value="city_id" >ID</option>
									<option value="name">City Name</option>
									<option value="state">State</option>
								</select>;
			var orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9650;&nbsp;</span>
			if (this.state.order == false)
				orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9660;&nbsp;</span>
			// let allFilters = this.state.filters.map(filter => {
			// 	return(filter + ", ");
			// });
			let filterItems = {Arizona: "Arizona",
				California: "California",
				Colorado: "Colorado",
				Florida: "Florida",
				Georgia: "Georgia",
				Illinois: "Illinois",
				Indiana: "Indiana",
				Massachusetts: "Massachusetts",
				Minnesota: "Minnesota",
				"North Carolina": "North%20Carolina",
				Ohio: "Ohio",
				Oregon: "Oregon",
				Pennsylvania: "Pennsylvania",
				Tennessee: "Tennessee",
				Texas: "Texas",
				Washington: "Washington"
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
									   {allCities}
									</center>
								</div>
							</div>;

		}
		let pagination = <p>{this.paginationBar(this.state.page, this.state.lastpage, 10)}<br />
								Page {this.state.page} out of {this.state.lastpage}</p>;

		return(
			<div className="pageContent">
				<Navigation activeTab={"cities"}/> 

				<main role="main">
					<div align="center">
						
						<div className="carousel-item titleImage active">
							<img className="fourth-slide" src={CitySlide} alt="Fourth slide"/>
							<div className="container">
								<div className="carousel-caption text-right">
									<h1><span className="orange">Connect</span> with your city.</h1>
								   
								</div>
							</div>
						</div>
					</div>
					
					<div className="container">
						<hr/>
						<center><h1>Cities</h1></center>
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
export default Cities;