import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/city_instance.css';
import URL from '../URLSpaceUnderscore';
import $ from 'jquery';
import Concert from "./Concert"


class CityInstance extends Component {

	constructor() {
		super();
		this.state = {
			cityData:{
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
				"image": "http://www.celebrityslice.com/wp-content/uploads/2015/08/city-wallpaper-7.jpg",
				"name": "Austin",
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
				"state": "Texas"
			}
		}
	}

	componentWillMount() {
		$.ajax({
			url: '/api/cities/' + URL.lastUrlItem(0),
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState("cityData": data);
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	render() {
		let albumSongs = this.state.cityData.songs.map(song => {
			return(
				<li className="list-group-item"><a href={"/song/" + song.song_id}>{song.name}</a></li>
			);
		});
		let concerts = this.state.cityData.concerts.map(concert => {
			return (<Concert concert={concert} />);
		});
		return(
			<div className="pageContent">
				<Navigation activeTab={"cities"}/> 

				<main role="main">

					<div align="center">
						<div className="carousel-item titleImage active">
							<img className="fourth-slide" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_Evening.jpg/1200px-Austin_Evening.jpg" alt="Austin City Skyline" />
							<div className="container">
								<div className="carousel-caption text-right">
									<h1><span>{this.state.cityData.name+ ","}</span> {this.state.cityData.state}</h1>
								</div>
							</div>
						</div>
					</div>   
					<div class="container">
						<hr/>
					</div>
										
					<div className="container">
						<div className="row mapPart1">
							<div id="map">
								<iframe src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBLzbYgNk0kZtGmqrS52qbvW0zZi43WeFw&q=" + URL.convert(this.state.cityData.name + "+" + this.state.cityData.state, ' ', '+')} allowfullscreen className="mapIframe" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
							</div>


							<div id="playlist">
								<p class = "h2">The Sound of <br />	{this.state.cityData.name}, {this.state.cityData.state}</p>
								<iframe id="spotify" className="shadow" src={this.state.cityData.playlist} width="450" height="80" frameborder="0" allowtransparency="true"></iframe>
								
								<ul className="list-group list-group-flush citySongList">
									{albumSongs}
									
								</ul>
							</div>
						</div>
					</div>
					<center>
						<div id="concerts">
							<p class = "h2">Upcoming Concerts</p>
								<ul className="list-group">
									
									{concerts}

								</ul>
						</div>
					</center>
					<br />	
					<br />	
					<div class="container">
						<hr/>
					</div>

				</main>	
				<Footer />
			</div>
		);
	}
} 
export default CityInstance;