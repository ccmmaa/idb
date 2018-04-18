import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/city_instance.css';
import URL from '../URLHelperFunctions';
import $ from 'jquery';
import LoadingH from '../assets/images/loadingHorizontal.gif';
import Loading from '../assets/images/loading.gif';
import Error from '../Error';
import Concert from "./Concert"


class CityInstance extends Component {

	constructor() {
		super();
		this.state = {
			cityData:{
				"doneLoading": false,
				status:200,
				statusText: "",
				"city_id": 1,
				"concerts": [
				],
				"image": "http://www.celebrityslice.com/wp-content/uploads/2015/08/city-wallpaper-7.jpg",
				"name": "",
				"playlist": LoadingH,
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
					}
				],
				"state": ""
			}
		}
	}

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/city/' + URL.lastUrlItem(0),
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"cityData": data, "doneLoading": true, "status": 200});
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({"doneLoading": true, "status": xhr.status, "statusText": xhr.statusText});
				// console.log("Error");
				console.log(xhr);
				// console.log(status);
				// console.log(error);
				// // console.log("Get ERROR: " + error);
			}.bind(this)
		});
	}

	BuildSpotifyEmbedUrl() {
		return "https://embed.spotify.com/?uri=spotify:user:thesoundsofspotify:playlist:" + URL.lastItem(this.state.cityData.playlist) + "&theme=white";
	}

	render() {
		let albumSongs = this.state.cityData.songs.map(song => {
			return(
				<li className="list-group-item"><a href={"/songs/" + song.song_id}>{song.name}</a></li>
			);
		});
		let concerts = this.state.cityData.concerts.map(concert => {
			return (<Concert concert={concert} />);
		});
		var map = <img src={Loading} />;
		if (this.state.doneLoading === true) {
			map = <iframe src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBLzbYgNk0kZtGmqrS52qbvW0zZi43WeFw&q=" + URL.convert(this.state.cityData.name + "+" + this.state.cityData.state, ' ', '+')} allowfullscreen className="mapIframe" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>;
		}

		var internalContent;
		if (Math.floor(this.state.status/100)===2 ) {
			internalContent = 
			<main role="main">

					<div align="center">
						<div className="carousel-item titleImage active">
							<img className="fourth-slide" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_Evening.jpg/1200px-Austin_Evening.jpg" alt="Austin City Skyline" />
							<div className="container">
								<div className="carousel-caption text-right">
									<h1><span className="orange">{this.state.cityData.name+ ","}</span> {this.state.cityData.state}</h1>
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
								{map}
							</div>


							<div id="playlist">
								<p class = "h2">The Sound of <br />	{this.state.cityData.name}, {this.state.cityData.state}</p>
								<iframe id="spotify" className="shadow" src={this.BuildSpotifyEmbedUrl()} width="450" height="80" frameborder="0" allowtransparency="true"></iframe>
								
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

				</main>;
		}
		else {
			// alert(this.state.status);
			internalContent = <Error status={this.state.status} statusText={this.state.statusText}/>;	
		}
		return(
			<div className="pageContent">
				<Navigation activeTab={"cities"}/> 

				{internalContent}
					
				<Footer />
				}
			</div>
		);
	}
} 
export default CityInstance;