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
			page: 1,
			lastpage:1,
			sort: "id asc",
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
		if (pageNumber > 0 && pageNumber <= this.state.lastpage)
			$.ajax({
					url: 'http://api.musepy.me/city?results_per_page=16&page=' + pageNumber,
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
		var object = this.state;
		object.sort = value;
		this.setState(object);
	}

	render() {
		var internalContent = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading) {
			var allCities = this.state.allCities.map(city => {
				if (city.name != "n/a") {
					return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <img className="rounded-circle" src={city["image"]} alt="Generic placeholder image" width="140" height="140" />
						  <h2>{city["name"]}</h2><p>{city["state"]}</p>
						  <p><a className="btn btn-secondary" href={"/cities/" + city["city_id"]} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
				}
			});
			internalContent = <div>
								<div className="sortAndFilter">
									<span id="sort_by_text" className="a-size-base">Sort by&nbsp;</span>
									<select className="sort-drop-down" onChange={event =>this.changeSort(event.target.value)} aria-labelledby="sort_by_text" value={this.state.sort}>
										<option value="id asc" >Unique ID: Asc</option>
										<option value="city">City Name</option>
										<option value="state">State</option>
									</select>
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