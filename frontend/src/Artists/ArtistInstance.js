import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/artist_instance.css';
import Black from '../assets/images/black_background.jpg';
import album1 from '../assets/images/travis_scott_huncho.jpg';
import album2 from '../assets/images/travis_scott_album.jpg';
import album3 from '../assets/images/travis_scott_rodeo.jpg';
import banner from '../assets/images/banner.jpg';
import Album from "./Album"
import URL from '../URLSpaceUnderscore';
import $ from 'jquery';
import Loading from '../assets/images/loading.gif';


class ArtistInstance extends Component {
	constructor() {
		super();
		this.state= {
			artistFound: false,
			doneLoading: false,
			image: {Loading},
			artistData: 
				{
					"albums": [
						{
							"album_id": 1,
							"artist_id": 1,
							"artwork": "https://i.scdn.co/image/627b725b85b62ae2953e3864146f75da6d2e309f",
							"genre": "",
							"name": "Son of Norma",
							"producer": "Dope House Records",
							"year": "2014"
						},
						{
							"album_id": 2,
							"artist_id": 1,
							"artwork": "https://i.scdn.co/image/627b725b85b62ae2953e3864146f75da6d2e309f",
							"genre": "",
							"name": "Son of Norma",
							"producer": "Dope House Records",
							"year": "2014"
						}
					],
					"artist_id": 1,
					"bio": "Bio Not Available",
					"concerts": [
						{
							"artist_id": 1,
							"city_id": 16,
							"concert_id": 1,
							"tickets": "http://philadelphia.eventful.com/events/dumbfoundead-/E0-001-111507201-5?utm_source=apis&utm_medium=apim&utm_campaign=apic",
							"time": "2018-04-18T20:30:00",
							"venue": "Union Transfer"
						},
						{
							"artist_id": 1,
							"city_id": 999,
							"concert_id": 2,
							"tickets": "http://baltimore.eventful.com/events/dumbfoundead-/E0-001-111507223-7?utm_source=apis&utm_medium=apim&utm_campaign=apic",
							"time": "2018-04-17T20:00:00",
							"venue": "Baltimore Soundstage"
						}
					],
					"genre": "chicano rap",
					"image": "https://i.scdn.co/image/392bdc3df99b6483be4dc7e9477464bc3effaf6a",
					"name": "South Park Mexican",
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
				}
		}
	}

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/artist/' + URL.lastUrlItem(0),
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"artistData": data, "artistFound": true, "doneLoading": true});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	render() {

		let artistAlbums = this.state.artistData.albums.map(album => {
			return(
				<Album albumId={album.album_id} albumArt={album.artwork} albumName={album.name}/>
			);
		});
		let popularSongs = this.state.artistData.songs.map(song => {
			return(
				<li className="list-group-item"><a href={"/songs/" + song.song_id}>{song.name}</a></li>
			);
		});
		let concerts = this.state.artistData.concerts.map(concert => {
			return(
				<li className="list-group-item d-flex justify-content-between align-items-center"><a href={"/city/" + concert.city_id}>{concert.venue}</a>
					<span className="badge badge-primary badge-pill">{concert.time}</span></li>
			);
		});
		return(
			<div className="pageContent">
				<Navigation activeTab={"artists"}/>

				<main role="main">
					<div className="artistInstanceCarousel">
						<div className="carousel-inner">
							 <div className="carousel-item active">
									 <img className="first-slide" src={banner} alt="First slide"/>
									 <div className="container">
											 <div className="carousel-caption text-left">
											 		<img src={this.state.artistData.image} className="artistImage" />
													<h1 className="orange">{this.state.artistData.name}</h1>
											 </div>
											 <div className="carousel-caption text-right">
													 <h3><span className="orange">Genre:</span> {this.state.artistData.genre}</h3>
											 </div>
									 </div>
							 </div>
						</div>
					</div>


					<br />
					<br />
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h2 className="orange">Albums</h2>
							</div>

							<div className="row">
								
								{artistAlbums}

							</div>
						</div>

						<hr />
						<br />
						<div className="container">
							<div className="row">
								<div className="col-lg-4">
									<p className="orange">Popular Songs</p>
									<ul className="list-group list-group-flush">
										{popularSongs}
									</ul>
								</div>

								<div className="col-lg-1"></div>

								<div className="col-lg-7">
									<p className="orange">Upcoming Concerts</p>
									<ul className="list-group">
										{concerts}
									</ul>
								</div>
							</div>

							<hr />
							<br />

							<div className="containerArtistBio">
								<div className="">
									<p className="orange">Bio</p>
									<p>{this.state.artistData.bio}</p>

								</div>
							</div>
						</div>
					</div>

				</main>
				<div className="container">
					<hr />
				</div>

				<Footer />

			</div>
		);
	}
}
export default ArtistInstance;
