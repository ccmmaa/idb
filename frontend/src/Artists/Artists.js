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
			doneLoadingH: false,
			page: 1,
			lastpage:0,
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

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/artist?results_per_page=12&page=' + this.state.page,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"allArtists":data["objects"], "doneLoadingH": true, "page": this.state.page, "lastpage": data["total_pages"]});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	lastPage() {
		 if((this.state.page - 1) > 0){
			$.ajax({
				url: 'http://api.musepy.me/artist?results_per_page=12&page=' + (this.state.page - 1),
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"allArtists": data["objects"], "doneLoadingH": true, "page": (this.state.page-1), "lastpage": data["total_pages"]});
				}.bind(this),
				error: function(xhr, status, error) {
					// console.log("Get ERROR: " + error);
				}
			});
		 }
		
	}

	nextPage() {
		if((this.state.page + 1)<= this.state.lastpage){
			$.ajax({
				url: 'http://api.musepy.me/artist?results_per_page=12&page=' + (this.state.page + 1),
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"allArtists": data["objects"], "doneLoadingH": true, "page": (this.state.page+1), "lastpage": data["total_pages"]});
				}.bind(this),
				error: function(xhr, status, error) {
					// console.log("Get ERROR: " + error);
				}
			});
		}
	}

	render() {
		var allArtists = <center><img src={LoadingH} className="pageLoadingHIndicator" /></center>;
		if (this.state.doneLoadingH) {
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
							<button onClick={this.lastPage.bind(this)}>BACK </button>
							<button onClick={this.nextPage.bind(this)}> NEXT</button>
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