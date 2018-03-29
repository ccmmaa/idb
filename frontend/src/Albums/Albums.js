import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/carousel.css';
import '../assets/css/modelpage.css';
import AlbumSlide from '../assets/images/albummodel.jpg';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loadingHorizontal.gif';
import $ from 'jquery';

class Albums extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
			page: 1,
			lastpage:0,
			allAlbums: [
				{
					"album_id": 1,
					"artist": {
						"artist_id": 1,
						"bio": "Loading...",
						"genre": "Loading...",
						"image": "https://i.scdn.co/image/392bdc3df99b6483be4dc7e9477464bc3effaf6a",
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
		$.ajax({
			url: 'http://api.musepy.me/album?results_per_page=12&page=' + this.state.page,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"allAlbums": data["objects"], "doneLoading": true, "page": this.state.page, "lastpage": data["total_pages"]});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	lastPage() {
		 if((this.state.page - 1) > 0){
			$.ajax({
				url: 'http://api.musepy.me/album?results_per_page=12&page=' + (this.state.page - 1),
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"allAlbums": data["objects"], "doneLoading": true, "page": (this.state.page-1), "lastpage": data["total_pages"]});
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
				url: 'http://api.musepy.me/album?results_per_page=12&page=' + (this.state.page + 1),
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"allAlbums": data["objects"], "doneLoading": true, "page": (this.state.page+1), "lastpage": data["total_pages"]});
				}.bind(this),
				error: function(xhr, status, error) {
					// console.log("Get ERROR: " + error);
				}
			});
		}
	}

	render() {
		var allAlbums = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading) {
			allAlbums = this.state.allAlbums.map(album => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
							<img className="rounded-circle" src={album.artwork} alt={album.name} width="140" height="140" />
							<h2>{album.name}</h2><h6>by <a href={"/artists/" + album.artist_id}>{album.artist.name}</a></h6>
							<p><a className="btn btn-secondary" href={"/albums/" + album.album_id} role="button">View Album &raquo;</a></p>
						</div>
					</div>
				);
			});
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
							<button onClick={this.lastPage.bind(this)}>BACK </button>
							<button onClick={this.nextPage.bind(this)}> NEXT</button>
							<p>Page: {this.state.page} out of {this.state.lastpage}</p>
							<center>{allAlbums}</center>
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