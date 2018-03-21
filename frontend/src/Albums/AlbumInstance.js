import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/album_instance.css';
import Loading from '../assets/images/loading.gif';
import URL from '../URLSpaceUnderscore';
import $ from 'jquery';


class AlbumInstance extends Component {

	constructor() {
		super();
		this.state = {
			songFound: false,
			doneLoading: false,
			albumData: 
			{
				"album_id": 1,
				"artist": {
					"artist_id": 1,
					"bio": "Bio Not Available",
					"genre": "chicano rap",
					"image": "https://i.scdn.co/image/392bdc3df99b6483be4dc7e9477464bc3effaf6a",
					"name": "South Park Mexican"
				},
				"artist_id": 1,
				"artwork": "https://i.scdn.co/image/627b725b85b62ae2953e3864146f75da6d2e309f",
				"genre": "",
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
		};
	}

	componentWillMount() {
		$.ajax({
			url: '/api/albums/' + URL.lastUrlItem(0),
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState("albumData": data);
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	render() {
		let allSongs = this.state.albumData.songs.map(song => {
			return(
				<li className="list-group-item"><a href={"/songs/"+song.song_id}>{song.name}</a></li>
			);
		});
		if (this.state.doneLoading && !this.state.songFound) {
			return (
				<h1>Song Not Found</h1>);
		}
		else {
			return(
				<div className="pageContent">
					<Navigation activeTab={"albums"}/> 

					<main role="main">

						<div>
							<div className="container">
								<div className="row">
									<div className="col-lg-4 albumsCol">
										<img src={this.state.albumData.artwork} alt="Album Art" className="img-thumbnail card-shadows " />
										<p className="h1">{this.state.albumData.name}</p>
										<p className="h3"><a href={"/artists/"+this.state.albumData.artist.artist_id}>{this.state.albumData.artist.name}</a></p>
									</div>

									<div className="col-lg-5 albumsCol">
											<p className="h2">Song List</p>
											<ul className="list-group list-group-flush">
												{allSongs}
											  </ul>
									</div>
									<div className="col-lg-3 albumsCol">
										<p className="h6"><span>Genre: </span>{this.state.albumData.genre}</p>
										<p className="h6"><span>Released: </span>{this.state.albumData.year}</p>

									</div>

								</div>
							</div>
							<br />
							<br />
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
} 
export default AlbumInstance;