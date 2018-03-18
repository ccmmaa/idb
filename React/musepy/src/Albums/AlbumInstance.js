import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/album_instance.css';
import Loading from '../assets/images/loading.gif';
import URL from '../URLSpaceUnderscore';


class AlbumInstance extends Component {

	constructor() {
		super();
		this.state = {
			songFound: false,
			doneLoading: false,
			albumArt: "http://www.mksp.in/images/loading.gif",
			albumName: URL.toString(URL.lastUrlItem()),
			albumArtist: "Example Artist",
			songs: ["song1", "song2", "song3", "song4"],
			genra: "a, b, c",
			releaseDate: "Some date",
			labels: "Blah"
		};
	}

	render() {
		let allSongs = this.state.songs.map(song => {
			return(
				<li className="list-group-item"><a href={"/songs/"+URL.toUrl(song)}>{song}</a></li>
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
										<img src={this.state.albumArt} alt="Album Art Needed" className="img-thumbnail card-shadows " />
										<p className="h1">{this.state.albumName}</p>
										<p className="h3"><a href={"/artists/"+URL.toUrl(this.state.albumArtist)}>{this.state.albumArtist}</a></p>
									</div>

									<div className="col-lg-5 albumsCol">
											<p class = "h2">Song List</p>
											<ul className="list-group list-group-flush">
												{allSongs}
											  </ul>
									</div>
									<div className="col-lg-3 albumsCol">
										<p className="h6"><span>Genre: </span>{this.state.genra}</p>
										<p className="h6"><span>Released: </span>{this.state.releaseDate}</p>
										<p className="h6"><span>Label: </span>{this.state.labels}</p>

									</div>

								</div>
							</div>
							<br />
							<br />
						</div>
					</main>
					<Footer />
				</div>
			);
		}
	}
} 
export default AlbumInstance;