import React, { Component } from 'react';
import '../assets/css/index.css';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import carousel1 from '../assets/images/carousel1.jpg';
import carousel2 from '../assets/images/carousel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';
import carousel4 from '../assets/images/carousel4.jpg';
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

				<main role="main">

					<div id="myCarousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
							<li data-target="#myCarousel" data-slide-to="1"></li>
							<li data-target="#myCarousel" data-slide-to="2"></li>
							<li data-target="#myCarousel" data-slide-to="3"></li>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img className="first-slide" src={carousel1} alt="First slide" />
								<div className="container">
									<div className="carousel-caption text-left">
										<h1><span>Search</span> your city's top songs.</h1>
										<p><a className="btn btn-lg btn-primary" href={"/songs"}  role="button">Songs</a></p>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<img className="second-slide" src={carousel2} alt="Second slide" />
								<div className="container">
									<div className="carousel-caption">
										<h1><span>Explore</span> your favorite artists.</h1>
										<p><a className="btn btn-lg btn-primary" href={"/artists"}  role="button">Artists</a></p>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<img className="third-slide" src={carousel3} alt="Third slide" />
								<div className="container">
									<div className="carousel-caption">
										<h1><span>Discover</span> new albums.</h1>
										<p><a className="btn btn-lg btn-primary" href={"/albums"}  role="button">Albums</a></p>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<img className="fourth-slide" src={carousel4} alt="Fourth slide" />
								<div className="container">
									<div className="carousel-caption text-right">
										<h1><span>Connect</span> with your city.</h1>
										<p><a className="btn btn-lg btn-primary" href={"/cities"} role="button">Cities</a></p>
									</div>
								</div>
							</div>
						</div>
						<a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>


					

					<div className="container marketing">

						<div className="index_row">
							<div className="col-lg-3">
								<img className="rounded-circle" src={middle1} alt="Generic placeholder image" width="140" height="140" />
								<h2>Songs</h2>
								<p><a className="btn btn-secondary" href="songs/songmodel.html"  role="button">View songs &raquo;</a></p>
							</div>
							<div className="col-lg-3">
								<img className="rounded-circle" src={middle2} alt="Generic placeholder image" width="140" height="140" />
								<h2>Artists</h2>
								<p><a className="btn btn-secondary" href="artists/artistmodel.html"  role="button">View artists &raquo;</a></p>
							</div>
							<div className="col-lg-3">
								<img className="rounded-circle" src={middle3} alt="Generic placeholder image" width="140" height="140" />
								<h2>Albums</h2>
								<p><a className="btn btn-secondary" href="albums/albummodel.html"  role="button">View albums &raquo;</a></p>
							</div>
							<div className="col-lg-3">
								<img className="rounded-circle" src={middle4} alt="Generic placeholder image" width="140" height="140" />
								<h2>Cities</h2>
								<p><a className="btn btn-secondary" href="cities/citymodel.html"  role="button">View cities &raquo;</a></p>
							</div>
						</div>

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
			</div>
		);
	}

}
export default Index;

