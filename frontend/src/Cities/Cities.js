import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/modelpage.css';
import CitySlide from '../assets/images/citymodel.jpg';
import URL from '../URLHelperFunctions';
import Loading from '../assets/images/loadingHorizontal.gif';
import $ from 'jquery';
import Error from '../Error';
import FilterHelper from '../FilterHelper';

class Cities extends Component {

	constructor() {
		super();
		this.state = {
			model: "city",
			filterBy: "state",
			doneLoading: false,
			status: 200,
			statusText: "",
			page: URL.getPage(1),
			lastpage:1,
			sort: URL.getSortItem("city_id", ["city_id","name","state"]),
			order: URL.getSortDirection("asc"),
			filters: URL.getFilters([], FilterHelper.validStates()),
			allItems:[{
					"city_id": 1, 	"concerts": [], 	"image": "http://www.celebrityslice.com/wp-content/uploads/2015/08/city-wallpaper-7.jpg", 	"name": "Loading...", 	"playlist": "https://open.spotify.com/user/thesoundsofspotify/playlist/3gz7G6lax8nkXZ3vBr3n4i", 	"songs": [], 	"state": "Loading..."
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
		if (this.state.filters.length > 0) {
			filterString = ',"filters":[{"or":[';
			var index = 0;
			for (var filter of this.state.filters) {
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
				url: 'http://api.musepy.me/grid/' + model + '?q={"order_by":[{"field":"' + this.state.sort + '","direction":"' + orderDirection + '"}]' + filterString + '}&results_per_page=16&page=' + pageNumber, dataType: 'json', cache: false, success: function(data) {
					this.setState({allItems: data["objects"], "doneLoading": true, "status": 200, "page": (pageNumber), "lastpage": data["total_pages"]});
				}.bind(this), error: function(xhr, status, error) {
					var state = this.state;
					state.status = xhr.status;
					state.statusText = xhr.statusText;
					this.setState(state);
				}.bind(this)
			});
		}
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
		console.log(this.state);
		window.history.replaceState("","", "/cities"+URL.encodeSortFilter(this.state, "city_id"));
		var internalContent = <center><img src={Loading} className="pageLoadingIndicator" /><p>If this page seems to load forever, try turning off the option "Use a prediction service to load pages more quickly" in Chrome's Settings>Advanced>Privacy</p></center>;
		if (this.state.doneLoading) {
			var allItems = this.state.allItems.map(city => {
				if (city.name != "n/a") {
					return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <a className="" href={"/cities/" + city["city_id"]} role="button">
						  <img className="rounded-circle" src={city["image"]} alt="Generic placeholder image" width="140" height="140" />
						  </a>
						  <h2><a href={"/cities/" + city["city_id"]}>{city["name"]}</a></h2><p>{city["state"]}</p>
						  <p><a className="btn btn-secondary" href={"/cities/" + city["city_id"]} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
				}
			});
			if (this.state.allItems.length === 0) {
				allItems = <h2 className="no_results">No results.</h2>;
			}
			let sortDropDown = <select className="sort-drop-down" onChange={event =>this.changeSort(event.target.value)} aria-labelledby="sort_by_text" value={this.state.sort}>
									<option value="city_id" >ID</option>
									<option value="name">City Name</option>
									<option value="state">State</option>
								</select>;
			var orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9650;&nbsp;</span>
			if (this.state.order == false)
				orderButton = <span className="orderDirection clickable" onClick={() => this.toggleAscDec()}>&nbsp;&#9660;&nbsp;</span>
			let filterItems = FilterHelper.statesDict();
			let allFilters = Object.keys(filterItems).map(filter => {
				return (<span className="clickable" onClick={() => this.addRemoveFilter(filterItems[filter])}><input type="checkbox" checked={this.state.filters.includes(filterItems[filter])}/>&nbsp;{filter}<br /></span>);
			});

			internalContent = <div>
								<div className="sortAndFilter">
									<strong>Sort by</strong><br />
									{sortDropDown}&nbsp;
									{orderButton}<br/><br/>
									<strong>State</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="clickable" onClick={() => this.clearFilters()}>clear</span><br />
									{allFilters}<br />
								</div>
								<div className="allThings">
									<center>
									   {allItems}
									</center>
								</div>
							</div>;

		}
		if (Math.floor(this.state.status/100)!==2 ) {
			internalContent = <Error status={this.state.status} statusText={this.state.statusText}/>;
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