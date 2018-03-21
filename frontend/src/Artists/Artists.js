import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/modelpage.css';
import ArtistSlide from '../assets/images/artistmodel.jpg';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loadingHorizontal.gif';
import $ from 'jquery';


class Artists extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: true,
			allArtists:[
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
				},
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
				},
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
				},
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
				},
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
				},
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
			]
		}
	}

	componentWillMount() {
		$.ajax({
			url: '/api/artist',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"allArtists": data, "doneLoading": true});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	render() {
		var allArtists = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading) {
			allArtists = this.state.allArtists.map(artist => {
				var bio = artist.bio.substring(0, 100) + "...";
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <img className="rounded-circle" src={artist.image} alt="Artist photo" width="140" height="140" />
						  <h2>{artist.name}</h2>
						  <p>{bio}</p>
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
									<h1><span>Explore</span> your favorite artists.</h1>
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