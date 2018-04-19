import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/artist_instance.css';
import banner from '../assets/images/banner.jpg';
import Album from "./Album"
import URL from '../URLHelperFunctions';
import $ from 'jquery';
import Loading from '../assets/images/loading.gif';
import Concert from './Concert';
import Error from '../Error';
import FilterHelper from '../FilterHelper';

class ArtistInstance extends Component {
	constructor() {
		super();
		this.state= {
			artistFound: false,
			doneLoading: false,
			status:200,
			image: {Loading},
			artistData: {
				"albums": [
				], "artist_id": 1, "bio": "", "concerts": [
				], "genre": "", "image": Loading, "name": "Loading...", "songs": [

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
				this.setState({"artistData": data, "artistFound": true, "doneLoading": true, "status": 200});
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({"doneLoading": true, "status": xhr.status});
			}.bind(this)
		});
	}

	render() {
		let artistAlbums = this.state.artistData.albums.map(album => {
			return(
				<Album albumId={album.album_id} albumArt={album.artwork} albumName={album.name} artist={this.state.artistData.name}/>
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
			let months = FilterHelper.monthsDict();
			let year = date.substring(0, firstDash);
			let month = date.substring(firstDash + 1, lastDash);
			let day = date.substring(lastDash + 1);
			let time = concert.time.substring(concert.time.indexOf('T') + 1);
			let dateandtime = months[month] + " " + day + ", " + year + " " + time;
			return(
				<Concert venue={concert.venue} cityId={concert.city_id} time={dateandtime} />
			);
		});
		let bio = "Bio not available.";
		let biolink = "";
		if(this.state.artistData.bio.indexOf('<a') != -1){
			bio = this.state.artistData.bio.substring(0, this.state.artistData.bio.indexOf('<a'));
			biolink = <a href={this.state.artistData.bio.substring(this.state.artistData.bio.indexOf('href=\'') + 6, this.state.artistData.bio.indexOf('\'>'))}>Read more about this artist on last.fm</a>;
		}

		var internalContent;
		if (Math.floor(this.state.status/100)!==2 ) {
			internalContent = <Error status={this.state.status} statusText={this.state.statusText}/>;
		}
		else {
			internalContent = 
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
									<p>{bio}</p>
									{biolink}

								</div>
							</div>
						</div>
					</div>

				</main>;
		}

		return(
			<div className="pageContent">
				<Navigation activeTab={"artists"}/>

				{internalContent}
				
				<div className="container">
					<hr />
				</div>

				<Footer />
			</div>
		);
	}
}
export default ArtistInstance;
