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
					"bio": "",
					"genre": "",
					"image": Loading,
					"name": "Loading Artist..."
				},
				"artist_id": 1,
				"artwork": Loading,
				"genre": "",
				"name": "Loading...",
				"producer": "",
				"songs": [
					
				],
				"year": ""
			}
		};
	}

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/album/' + URL.lastUrlItem(0),
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"albumData": data, "doneLoading": true, "songFound": true});
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
			var genre = this.state.albumData.genre;
			if (genre == "") {
				genre = "None";
			}
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
										<p className="h6"><span>Genre: </span>{genre}</p>
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