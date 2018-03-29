import React, { Component } from 'react';
import '../assets/css/index.css';
import '../assets/css/carousel.css';
import MyCarousel from './MyCarousel';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import middle1 from '../assets/images/middle1.jpg';
import middle2 from '../assets/images/middle2.jpg';
import middle3 from '../assets/images/middle3.jpg';
import middle4 from '../assets/images/middle4.jpg';
import bottom1 from '../assets/images/bottom1.jpg';
import bottom2 from '../assets/images/bottom2.jpg';
import bottom3 from '../assets/images/bottom3.jpg';

class Index extends Component {

	render() {
		return(
			<div className="pageContent">
				<Navigation activeTab={"index"} />

				<main role="main" onLoad="func()">

					<MyCarousel />

					<div className="container marketing">

						<div className="index_row">
							<div className="col-lg-3">
								<img className="rounded-circle" src={middle1} alt="Generic placeholder image" width="140" height="140" />
								<h2>Songs</h2>
								<p><a className="btn btn-secondary" href="songs"  role="button">View songs &raquo;</a></p>
							</div>
							<div className="col-lg-3">
								<img className="rounded-circle" src={middle2} alt="Generic placeholder image" width="140" height="140" />
								<h2>Artists</h2>
								<p><a className="btn btn-secondary" href="artists"  role="button">View artists &raquo;</a></p>
							</div>
							<div className="col-lg-3">
								<img className="rounded-circle" src={middle3} alt="Generic placeholder image" width="140" height="140" />
								<h2>Albums</h2>
								<p><a className="btn btn-secondary" href="albums"  role="button">View albums &raquo;</a></p>
							</div>
							<div className="col-lg-3">
								<img className="rounded-circle" src={middle4} alt="Generic placeholder image" width="140" height="140" />
								<h2>Cities</h2>
								<p><a className="btn btn-secondary" href="cities"  role="button">View cities &raquo;</a></p>
							</div>
						</div>
						<br />

						<div className="container">
							<hr />
						</div>

						<div className="row featurette index_descriptions">
							<div className="col-md-7">
								<h2 className="featurette-heading-orange">Search a song or artist. <span className="text-muted">Get custom playlists.</span></h2>
								<p className="lead">Look through our library of songs and find a great new artist to listen to. Or look through your favorite artists. Maybe you'll find a song of theirs you haven't heard before. Listen to your songs right on our website through Spotify and read along with lyrics while you do.</p>
							</div>
							<div className="col-md-5">
								<img className="featurette-image img-fluid mx-auto" src={bottom1} alt="Generic placeholder image" />
							</div>
						</div>

						<div className="container">
							<hr />
						</div>

						<div className="row featurette index_descriptions">
							<div className="col-md-5 order-md-1">
								<img className="featurette-image img-fluid mx-auto" src={bottom2} alt="Generic placeholder image" />
							</div>
							<div className="col-md-7 order-md-2">
								<h2 className="featurette-heading-orange">Find local concerts <span className="text-muted">By your favorite artists.</span></h2>
								<p className="lead">Once you find that great new artist, take a look at their bio, albums, and songs. But don't forget to find out where their upcoming concerts are happening; it's right there on their page. Maybe they'll be playing near you...</p>
							</div>
						</div>

						<div className="container">
							<hr />
						</div>

						<div className="row featurette index_descriptions">
							<div className="col-md-7">
								<h2 className="featurette-heading-orange">Enter a city. <span className="text-muted">Discover what's hot in your hometown.</span></h2>
								<p className="lead">Everyone's got their favorite city, whether it's windy Chicago or busy New York. Take a look at what concerts are happening there and listen to a playlist crafted especially for you and your favorite place in the world.</p>
							</div>
							<div className="col-md-5">
								<img className="featurette-image img-fluid mx-auto" src={bottom3} alt="Generic placeholder image" />
							</div>
						</div>
						<div className="container">
							<hr />
						</div>
					</div>
				</main>

				<Footer />
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
			</div>
		);
	}

}
export default Index;
