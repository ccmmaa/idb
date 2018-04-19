import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/album_instance.css';
import Loading from '../assets/images/loading.gif';
import URL from '../URLHelperFunctions';
import $ from 'jquery';
import Error from '../Error';

class AlbumInstance extends Component {

	constructor() {
		super();
		console.log("Album instance.super");
		console.log(super());
		this.state = {
			songFound: false,
			status:200,
			doneLoading: false,
			albumData:
			{
				"album_id": 1,
				"artist": {
					"artist_id": 1,
					"bio": "",
					"genre": "",
					"image": Loading,
					"name": 'If this page seems to load forever, try turning off the option "Use a prediction service to load pages more quickly" in Chrome\'s Settings>Advanced>Privacy'
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
				this.setState({"albumData": data, "doneLoading": true, "songFound": true, "status": 200});
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({"doneLoading": true, "status": xhr.status});
			}.bind(this)
		});
	}

	render() {
		let allSongs = this.state.albumData.songs.map(song => {
			return(
				<li className="list-group-item"><a href={"/songs/"+song.song_id}>{song.name}</a></li>
			);
		});
		
		var genre = URL.capitalizeWords(this.state.albumData.artist.genre);
		if (genre == "") {
			genre = "None";
		}
		var internalContent;
		if (Math.floor(this.state.status/100)!==2 ) {
			internalContent = <Error status={this.state.status} statusText={this.state.statusText}/>;
		}
		else {
			internalContent = 
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
				</main>;
		}
		return(
			<div className="pageContent">
				<Navigation activeTab={"albums"}/>

				{internalContent}
				
				<div className="container">
					<hr />
				</div>
				<Footer />
			</div>
		);
	}
}
export default AlbumInstance;
