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
			lastpage:0,
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

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/song?results_per_page=12&page=' + this.state.page,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"allSongs": data["objects"], "doneLoading": true, "page": this.state.page, "lastpage": data["total_pages"]});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}


	lastPage() {
		 if((this.state.page - 1) > 0){
			$.ajax({
				url: 'http://api.musepy.me/song?results_per_page=12&page=' + (this.state.page - 1),
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"allSongs": data["objects"], "doneLoading": true, "page": (this.state.page-1), "lastpage": data["total_pages"]});
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
				url: 'http://api.musepy.me/song?results_per_page=12&page=' + (this.state.page + 1),
				dataType: 'json',
				cache: false,
				success: function(data) {
					this.setState({"allSongs": data["objects"], "doneLoading": true, "page": (this.state.page+1), "lastpage": data["total_pages"]});
				}.bind(this),
				error: function(xhr, status, error) {
					// console.log("Get ERROR: " + error);
				}
			});
		}
	}

	render() {

		var allSongs = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading) {
			allSongs = this.state.allSongs.map(song => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <img className="rounded-circle" src={song["Album"]["artwork"]} alt="Generic placeholder image" width="140" height="140" />
						  <h2>{song["name"]}</h2><h6>by <a href={"/artists/" + song["artist"]["artist_id"]}>{song["artist"]["name"]}</a></h6><br />
						  <p><a className="btn btn-secondary" href={"/songs/" + song["song_id"]} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
			});
		}
		

		/*

		*/
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
							<button onClick={this.lastPage.bind(this)}>BACK </button>
							<button onClick={this.nextPage.bind(this)}> NEXT</button>
							<p>Page: {this.state.page} out of {this.state.lastpage}</p>
							<center>
								{allSongs}
							</center>
							
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