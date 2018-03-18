import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/modelpage.css';
import AlbumSlide from '../assets/images/albummodel.jpg';
import URL from '../URLSpaceUnderscore';




class Albums extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
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

		let allAlbums = this.state.allAlbums.map(album => {
			return(
				<div className="card-shadows modelCard">
					<div className="ingrid" text-align="center">
						<img className="rounded-circle" src={album["album_art_url"]} alt={album["name"]} width="140" height="140" />
						<h2>{album["name"]}</h2><h6>by <a href={"/artists/" + URL.toUrl(album["artist"])} >{album["artist"]}</a></h6>
						<p><a className="btn btn-secondary" href={"/albums/" + URL.toUrl(album["name"])} role="button">View {album["name"]} &raquo;</a></p>
					</div>
				</div>
			);
		});

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
							
						{allAlbums}

							
						</div>
					</div>



					<div className="container">
						<hr />
					</div>

				</main>
			</div>
		);
	}
} 
export default Albums;
/*
<div className="col-lg-2">
								<div className="ingrid" text-align="center">
								  <img className="rounded-circle" src="/static/images/kesha_rainbow.jpg" alt="Generic placeholder image" width="140" height="140" />
								  <h2>Rainbow</h2><h6>by Kesha</h6>
								  <p><a className="btn btn-secondary" href="album1.html" role="button">View Rainbow &raquo;</a></p>
								</div>
							</div>
							
							<div className="col-lg-2">
								<div className="ingrid" text-align="center">
								  <img className="rounded-circle" src="/static/images/travis_scott_album.jpg" alt="Generic placeholder image" width="140" height="140" />
								  <h2>Birds in the Trap Sing McKnight</h2><h6>by Travis Scott</h6>
								  <p><a className="btn btn-secondary" href="album2.html" role="button">View Birds in the Trap... &raquo;</a></p>
								</div>
							</div>
							
							<div className="col-lg-2">
								<div className="ingrid" text-align="center">
								  <img className="rounded-circle" src="/static/images/khalid_americanteen.jpg" alt="Generic placeholder image" width="140" height="140" />
								  <h2>American Teen</h2><h6>by Khalid</h6>
								  <p><a className="btn btn-secondary" href="album3.html" role="button">View American Teen &raquo;</a></p>
								</div>
							</div>
*/