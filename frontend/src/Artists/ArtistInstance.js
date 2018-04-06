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
import Concert from './Concert';


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
					],
					"artist_id": 1,
					"bio": "",
					"concerts": [
					],
					"genre": "",
					"image": Loading,
					"name": "Loading...",
					"songs": [
						
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
			let date = concert.time.substring(0, concert.time.indexOf('T'));
			let firstDash = date.indexOf('-');
			let lastDash = date.lastIndexOf('-');
			let months = {
				"01": "Jan",
				"02": "Feb",
				"03": "Mar",
				"04": "Apr",
				"05": "May",
				"06": "Jun",
				"07": "Jul",
				"08": "Aug",
				"09": "Sep",
				"10": "Oct",
				"11": "Nov",
				"12": "Dec"
			}
			let year = date.substring(0, firstDash);
			let month = date.substring(firstDash + 1, lastDash);
			let day = date.substring(lastDash + 1);
			let time = concert.time.substring(concert.time.indexOf('T') + 1);
			let dateandtime = months[month] + " " + day + ", " + year + " " + time;
			return(
				<Concert venue={concert.venue} cityId={concert.city_id} time={dateandtime} />
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
													 <h3><span className="orange">Genre:</span> {URL.capitalizeWords(this.state.artistData.genre)}</h3>
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
									<ul className="list-group list-group-flush popularSongsList">
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
