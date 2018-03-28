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
					url: 'http://api.musepy.me/artist?results_per_page=12&page=' + pageNumber,
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
			bar.push(<span><span onClick={() => this.prevPage()} class="paginationClickable">{"< Previous"}</span>&nbsp;&nbsp;&nbsp;</span>);
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
			bar.push(<span><span onClick={() => this.nextPage()} class="paginationClickable">{"Next >"}</span>&nbsp;&nbsp;&nbsp;</span>);
		return bar;
	}
	
	pageBarHelper(index, currentPage) {
		if (index == currentPage) 
			return(<span>{index}&nbsp;&nbsp;&nbsp;</span>);
		else return(<span><span onClick={() => this.getPage(index)} class="paginationClickable">{index}</span>&nbsp;&nbsp;&nbsp;</span>);
	}

	render() {
		var allArtists = <center><img src={LoadingH} className="pageLoadingHIndicator" /></center>;
		if (this.state.doneLoading) {
			allArtists = this.state.allArtists.map(artist => {
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
		}

		return(
			<div className="pageContent">
				<Navigation activeTab={"artists"}/> 

				<main role="main">
					<div align="center">
						
						<div class="carousel-item titleImage active">
							<img class="second-slide" src={ArtistSlide} alt="Second slide"/>
							<div class="container">
								<div class="carousel-caption">
									<h1><span className="orange">Explore</span> your favorite artists.</h1>
								</div>
							</div>
						</div>
					</div>
					
					<div class="container">
						<hr/>
						<center><h1>Artists</h1></center>
						<hr/>
					</div>
					<div class="container2 marketing">
						<div class="row">
							<p>{this.paginationBar(this.state.page, this.state.lastpage, 10)}</p>
							<p>Page: {this.state.page} out of {this.state.lastpage}</p>
							
						   <center>
								{allArtists}
							</center> 
						</div>
					</div>

					<div class="container">
						<hr/>
					</div>
				</main>

				<Footer />

			</div>
		);
	}
} 
export default Artists;