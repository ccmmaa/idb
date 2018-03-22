import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/carousel.css';
import '../assets/css/modelpage.css';
import AlbumSlide from '../assets/images/albummodel.jpg';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loadingHorizontal.gif';
import LoadingH from '../assets/images/loadingHorizontal.gif';
import $ from 'jquery';

class Albums extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
			allAlbums: [
				{
					"album_id": 1,
					"artist": {
						"artist_id": 1,
						"bio": "",
						"genre": "",
						"image": Loading,
						"name": "South Park Mexican"
					},
					"artist_id": 1,
					"artwork": Loading,
					"genre": "",
					"name": "...",
					"producer": "",
					"songs": [
						
					],
					"year": ""
				}
			]
		}
	}

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/album',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({"allAlbums": data["objects"], "doneLoading": true});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	render() {
		var allAlbums = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading === true) {
			allAlbums = this.state.allAlbums.map(album => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
							<img className="rounded-circle" src={album.artwork} alt={album.name} width="140" height="140" />
							<h2>{album.name}</h2><h6>by <a href={"/artists/" + album.artist_id}>{album.artist.name}</a></h6>
							<p><a className="btn btn-secondary" href={"/albums/" + album.album_id} role="button">View Album &raquo;</a></p>
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