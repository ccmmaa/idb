import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/modelpage.css';
import AlbumSlide from '../assets/images/albummodel.jpg';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loadingHorizontal.gif';





class Albums extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: true,
			allAlbums: [
				{
					"name": "Birds in the Trap Sing McKnight",
					"artist": "Travis Scott",
					"labels": [
						"Grand Hustle",
						"Epic"
					],
					"album_art_url": "https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d",
					"genre": "Hip-Hop",
					"length": "00:53",
					"songs": [
						"the ends",
						"way back",
						"coordinate",
						"through the late night",
						"beibs in the trap",
						"sdp interlude",
						"sweet sweet",
						"outside",
						"goosebumps",
						"first take",
						"pick up the phone",
						"lose",
						"guidance",
						"wonderful"
					],
					"country_of_origin": "United States",
					"features": [
						"Young Thug"
					]
				},
				{
					"name": "Birds in the Trap Sing McKnight",
					"artist": "Travis Scott",
					"labels": [
						"Grand Hustle",
						"Epic"
					],
					"album_art_url": "https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d",
					"genre": "Hip-Hop",
					"length": "00:53",
					"songs": [
						"the ends",
						"way back",
						"coordinate",
						"through the late night",
						"beibs in the trap",
						"sdp interlude",
						"sweet sweet",
						"outside",
						"goosebumps",
						"first take",
						"pick up the phone",
						"lose",
						"guidance",
						"wonderful"
					],
					"country_of_origin": "United States",
					"features": [
						"Young Thug"
					]
				},
				{
					"name": "Birds in the Trap Sing McKnight",
					"artist": "Travis Scott",
					"labels": [
						"Grand Hustle",
						"Epic"
					],
					"album_art_url": "https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d",
					"genre": "Hip-Hop",
					"length": "00:53",
					"songs": [
						"the ends",
						"way back",
						"coordinate",
						"through the late night",
						"beibs in the trap",
						"sdp interlude",
						"sweet sweet",
						"outside",
						"goosebumps",
						"first take",
						"pick up the phone",
						"lose",
						"guidance",
						"wonderful"
					],
					"country_of_origin": "United States",
					"features": [
						"Young Thug"
					]
				},
				{
					"name": "Birds in the Trap Sing McKnight",
					"artist": "Travis Scott",
					"labels": [
						"Grand Hustle",
						"Epic"
					],
					"album_art_url": "https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d",
					"genre": "Hip-Hop",
					"length": "00:53",
					"songs": [
						"the ends",
						"way back",
						"coordinate",
						"through the late night",
						"beibs in the trap",
						"sdp interlude",
						"sweet sweet",
						"outside",
						"goosebumps",
						"first take",
						"pick up the phone",
						"lose",
						"guidance",
						"wonderful"
					],
					"country_of_origin": "United States",
					"features": [
						"Young Thug"
					]
				},
				{
					"name": "Birds in the Trap Sing McKnight",
					"artist": "Travis Scott",
					"labels": [
						"Grand Hustle",
						"Epic"
					],
					"album_art_url": "https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d",
					"genre": "Hip-Hop",
					"length": "00:53",
					"songs": [
						"the ends",
						"way back",
						"coordinate",
						"through the late night",
						"beibs in the trap",
						"sdp interlude",
						"sweet sweet",
						"outside",
						"goosebumps",
						"first take",
						"pick up the phone",
						"lose",
						"guidance",
						"wonderful"
					],
					"country_of_origin": "United States",
					"features": [
						"Young Thug"
					]
				},
				{
					"name": "Birds in the Trap Sing McKnight",
					"artist": "Travis Scott",
					"labels": [
						"Grand Hustle",
						"Epic"
					],
					"album_art_url": "https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d",
					"genre": "Hip-Hop",
					"length": "00:53",
					"songs": [
						"the ends",
						"way back",
						"coordinate",
						"through the late night",
						"beibs in the trap",
						"sdp interlude",
						"sweet sweet",
						"outside",
						"goosebumps",
						"first take",
						"pick up the phone",
						"lose",
						"guidance",
						"wonderful"
					],
					"country_of_origin": "United States",
					"features": [
						"Young Thug"
					]
				},
			]
		};
	}

	render() {
		var allAlbums = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading) {
			allAlbums = this.state.allAlbums.map(album => {
				return(
					<div className="card-shadows model-cards modelCard">
						<div className="ingrid" text-align="center">
							<img className="rounded-circle" src={album["album_art_url"]} alt={album["name"]} width="140" height="140" />
							<h2>{album["name"]}</h2><h6>by <a href={"/artists/" + URL.toUrl(album["artist"])} >{album["artist"]}</a></h6>
							<p><a className="btn btn-secondary" href={"/albums/" + URL.toUrl(album["name"])} role="button">View Album &raquo;</a></p>
						</div>
					</div>
				);
			});
		}
		

		return(
			<div className="pageContent">
				<Navigation activeTab={"albums"}/>
				<main role="main">
					<div align="center">
						
						<div className="carousel-item titleImage active">
							<img className="third-slide" src={AlbumSlide} alt="Third slide" />
							<div className="container">
								<div className="carousel-caption">
									<h1><span>Discover</span> new albums.</h1>
								</div>
							</div>
						</div>	
					</div>
					
					<div className="container">
						<hr />
						<center><h1>Albums</h1></center>
						<hr />
					</div>
					<div className="container2 marketing">
					
						<div className="row">
							<center>{allAlbums}</center>
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
export default Albums;