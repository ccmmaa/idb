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
			doneLoading: true,
			allCities:[ 
				
				{
					"city_id": 1,
					"concerts": [
						{
							"artist_id": 10,
							"city_id": 1,
							"concert_id": 98,
							"tickets": "http://houston.eventful.com/events/ray-wylie-hubbard-/E0-001-112040343-1?utm_source=apis&utm_medium=apim&utm_campaign=apic",
							"time": "2018-04-07T19:00:00",
							"venue": "The Heights Theater"
						},
						{
							"artist_id": 14,
							"city_id": 1,
							"concert_id": 127,
							"tickets": "http://dallas.eventful.com/events/jon-wolfe-/E0-001-111995850-0?utm_source=apis&utm_medium=apim&utm_campaign=apic",
							"time": "2018-04-14T00:00:00",
							"venue": "Gas Monkey Live!"
						}
					],
					"image": Loading,
					"name": "Loading",
					"playlist": "https://open.spotify.com/user/thesoundsofspotify/playlist/3gz7G6lax8nkXZ3vBr3n4i",
					"songs": [
						{
							"album_id": 1,
							"artist_id": 1,
							"city_id": 1,
							"itunes": "https://itunes.apple.com/us/album/cody-canada-tells-it-like-it-is-live/1160443435?i=1160443744&uo=4",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "Cody Canada Tells IT Like It Is",
							"song_id": 1,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:65Z8nMFjEc3DBRwKMduBzr"
						},
						{
							"album_id": 1,
							"artist_id": 1,
							"city_id": 1,
							"itunes": "https://itunes.apple.com/us/album/feelin-good-again-live/508941748?i=508942085&uo=4",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "Feelin' Good Again",
							"song_id": 2,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:0Nypbyz6YYQSaHG44mk3Q6"
						},
						{
							"album_id": 1,
							"artist_id": 1,
							"city_id": 1,
							"itunes": "https://itunes.apple.com/us/album/gringo-honeymoon-live/42336939?i=42336900&uo=4",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "Gringo Honeymoon",
							"song_id": 3,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:2IUj1twwM5fK1L5OZLRCiT"
						},
						{
							"album_id": 1,
							"artist_id": 1,
							"city_id": 1,
							"itunes": "https://itunes.apple.com/us/album/state-of-thanks-address-live/1160443435?i=1160443747&uo=4",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "State Of Thanks Address",
							"song_id": 4,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:0AGlXTY41fQHwJ3hoMgThP"
						},
						{
							"album_id": 1,
							"artist_id": 1,
							"city_id": 1,
							"itunes": "https://itunes.apple.com/us/album/i-gotta-go/455054438?i=455054596&uo=4",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "I Gotta Go",
							"song_id": 5,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:6kA0YoWtz5M0VmRNcZhyvw"
						},
						{
							"album_id": 1,
							"artist_id": 1,
							"city_id": 1,
							"itunes": "https://itunes.apple.com/us/album/feelin-good-again-live/508941748?i=508942085&uo=4",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "Feelin' Good Again",
							"song_id": 2,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:0Nypbyz6YYQSaHG44mk3Q6"
						},
						{
							"album_id": 1,
							"artist_id": 1,
							"city_id": 1,
							"itunes": "https://itunes.apple.com/us/album/gringo-honeymoon-live/42336939?i=42336900&uo=4",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "Gringo Honeymoon",
							"song_id": 3,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:2IUj1twwM5fK1L5OZLRCiT"
						},
						{
							"album_id": 1,
							"artist_id": 1,
							"city_id": 1,
							"itunes": "https://itunes.apple.com/us/album/state-of-thanks-address-live/1160443435?i=1160443747&uo=4",
							"lyrics": "Lyrics Not Available for This Song.",
							"name": "State Of Thanks Address",
							"song_id": 4,
							"spotify": "https://open.spotify.com/embed?uri=spotify:track:0AGlXTY41fQHwJ3hoMgThP"
						}
					],
					"state": ""
				}
			]
		}
	}

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/city',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"allCities": data["objects"], "doneLoading": true});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	render() {
		var allCities = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading === true) {
			allCities = this.state.allCities.map(city => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <img className="rounded-circle" src={city["image"]} alt="Picture of City" width="140" height="140" />
						  <h2>{city["name"]}</h2><p>{city["state"]}</p>
						  <p><a className="btn btn-secondary" href={"/cities/"+city.city_id} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
			});
		}

		return(
			<div className="pageContent">
				<Navigation activeTab={"cities"}/> 

				<main role="main">
					<div align="center">
						
						<div class="carousel-item titleImage active">
							<img class="fourth-slide" src={CitySlide} alt="Fourth slide"/>
							<div class="container">
								<div class="carousel-caption text-right">
									<h1><span>Connect</span> with your city.</h1>
								   
								</div>
							</div>
						</div>
					</div>
					
					<div class="container">
						<hr/>
						<center><h1>Cities</h1></center>
						<hr/>
					</div>
					<div class="container2 marketing">
						<div class="row">
						<center>
						   {allCities}
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
export default Cities;