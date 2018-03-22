import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/song_instance.css';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loading.gif';
import $ from 'jquery';


class SongInstance extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
			video: Loading,
			songData: 
			{
				"Album": {
					"album_id": 1,
					"artist_id": 1,
					"artwork": "https://i.scdn.co/image/627b725b85b62ae2953e3864146f75da6d2e309f",
					"genre": "",
					"name": "Son of Norma",
					"producer": "Dope House Records",
					"year": "2014"
				},
				"album_id": 1,
				"artist": {
					"artist_id": 1,
					"bio": "Bio Not Available",
					"genre": "",
					"image": "",
					"name": "Loading Artist..."
				},
				"artist_id": 1,
				"itunes": "https://www.apple.com/itunes/charts/songs/",
				"lyrics": "Loading...",
				"name": "Loading Song...",
				"song_id": 1,
				"spotify": Loading
			}
		};
	}

	getiTunesUrl() {
		$.ajax({
			url: "https://itunes.apple.com/search?term=" + URL.convert(this.state.songData.name + "+" + this.state.songData.artist.name, ' ', '+') + "&limit=1",
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data);
				if (data.resultCount === 0) {
					this.setState({itunesUrl: "https://www.apple.com/itunes/charts/songs/"});
				} else {
					this.setState({itunesUrl: data.results[0].trackViewUrl});
				}
			}.bind(this),
			error: function(xhr, status, error) {
				console.log("error");
				
			}
		});
	}

	componentWillMount() {
		this.getiTunesUrl();
		$.ajax({
			url: 'http://api.musepy.me/song/' + URL.lastUrlItem(0),
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"songData": data, "doneLoading": true});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});

	}

	render() {
		let lyricsPartsArray = this.state.songData.lyrics.split("\n");
		let allLyricsParts = lyricsPartsArray.map(lyricsPart => {
			return(
				<span>{lyricsPart} <br/></span>
			);
		});
		let loaded = this.state.doneLoading;
		return(
			<div className="pageContent">
				<Navigation activeTab={"songs"}/> 

				<main role="main">
					<div align="center">
						<br />
						<h1>{this.state.songData.name}</h1><h6>by <a href={"/artists/"+this.state.songData.artist_id}>{this.state.songData.artist.name}</a></h6>
					</div>
					<div className="container">
						<hr />
					</div>
					<div className="container marketing">
						<div className="row">
							<div className="lyricsCol">
								<div className="ingrid" text-align="center">
									<h3>Lyrics</h3><br />
									{allLyricsParts}
								</div>
							</div>
							
							<div className="mediaCol">
								<div className="ingrid" text-align="center">
									<iframe src={this.state.songData.spotify} frameborder="0" className="songPlayer" allowtransparency="true"></iframe>
									<p><a class="btn btn-success btn-sm" href={this.state.itunesUrl} role="button">View in iTunes »</a></p>
									<hr />
									<p align="left"><a className="btn btn-secondary btn-lg" href={"/artists/" + this.state.songData.artist_id} role="button">View this Artist &raquo;</a></p>
									<p align="left"><a className="btn btn-secondary btn-lg" href={"/albums/" + this.state.songData.album_id} role="button">View this Album &raquo;</a></p>
									</div>
							</div>
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
export default SongInstance;

/*
Not Enough Information:
									<p><a className="btn btn-success btn-sm" href="https://itunes.apple.com/us/album/rainbow/1253688426" role="button">Purchase &raquo;</a></p>
									<p align="left"><a className="btn btn-secondary btn-lg" href="#" role="button">View Other Music from this City &raquo;</a></p>


*/