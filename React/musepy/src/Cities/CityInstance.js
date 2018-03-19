import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/city_instance.css';
import URL from '../URLSpaceUnderscore';


class CityInstance extends Component {

	render() {
		return(
			<div className="pageContent">
				<Navigation activeTab={"cities"}/> 

				<main role="main">

					<div align="center">
						<div className="carousel-item titleImage active">
							<img className="fourth-slide" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_Evening.jpg/1200px-Austin_Evening.jpg" alt="Austin City Skyline" />
							<div className="container">
								<div className="carousel-caption text-right">
									<h1><span>{URL.lastUrlItem(0) + ","}</span> {URL.lastUrlItem(1)}</h1>
								</div>
							</div>
						</div>
					</div>   
						


					
					<div className="container">
						<div className="row">
							<div id="map">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440897.0680945689!2d-98.03359651875269!3d30.3080552998462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C+TX!5e0!3m2!1sen!2sus!4v1518562796210" className="mapIframe" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
							</div>

							<div id="playlist">
								<p class = "h2">The Sound of <br />	Austin, TX</p>
								<iframe id="spotify" className="shadow" src="https://embed.spotify.com/?uri=spotify:user:thesoundsofspotify:playlist:3gz7G6lax8nkXZ3vBr3n4i&theme=white" width="450" height="80" frameborder="0" allowtransparency="true"></iframe>
								
								<ul className="list-group list-group-flush">
									<li className="list-group-item"><a href="../songs/song1.html">In My Arms Instead - Randy Rogers Band</a></li>
									<li className="list-group-item"><a href="../songs/song1.html">Buy Mystelf A Chance - Randy Rogers Band</a></li>
									<li className="list-group-item"><a href="../songs/song1.html">Mo City Don - Z-Ro</a></li>
									<li className="list-group-item"><a href="../songs/song1.html">Kiss Me In The Dark - Randy Rogers Band</a></li>
									<li className="list-group-item"><a href="../songs/song1.html">Corpus Christi Bay - Robert Earl Keen </a></li>
									<li className="list-group-item"><a href="../songs/song1.html">My Texas(feat. Pat Green) - Josh Abbot Band</a></li>
									<li className="list-group-item"><a href="../songs/song1.html">She's Like Texas - Josh Abbot Band</a></li>
									<li className="list-group-item"><a href="../songs/song1.html">Sad Sad City - Ghostland Observatory </a></li>
									<li className="list-group-item"><a href="../songs/song1.html">Every Girl - Turnpike Troubadors </a></li>
									<li className="list-group-item"><a href="../songs/song1.html">Feelin' Good Again - Robert Earl Keen </a></li>
								</ul>
							</div>
						</div>
					</div>
					<center>
						<div id="concerts">
							<p class = "h2">Upcoming Concerts</p>
								<ul className="list-group">
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<img className="concert-img" src="https://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/039/777/338-2.jpeg_/kesha-macklemore-38.jpeg"/>
										<p className="concert-text">
											<a href="../artists/artist1.html">Kesha & Macklemore</a>
											<br />	Jun 22, 2018 
											<br />	 7:00 PM 
											<br />	 Austin360 Amphitheater<br />	
											<a href="https:austin.eventful.com/events/kesha-macklemore-/E0-001-109666631-1" target="_blank">
												<span className="badge badge-primary badge-pill">Buy Tickets</span>
											</a> 
										</p>	
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<img className="concert-img" src="https://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/004/328/114-2.png_/st-vincent-14.png"/>
										<p className="concert-text">
											<a href="../artists/artist1.html">St. Vincent</a>
											<br />	Feb 22, 2018 
											<br />	 8:00 PM 
											<br />	 Austin City Limits Live @ Moody Theater<br />	
											<a href="https://austin.eventful.com/events/st-vincent-/E0-001-108421756-5" target="_blank">
												<span className="badge badge-primary badge-pill">Buy Tickets</span>
											</a> 
										</p>
										
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<img className="concert-img" src="https://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/001/219/398-6.jpeg_/mercyme-98.jpeg"/>
										<p className="concert-text">
											<a href="../artists/artist1.html">MercyMe</a>
											<br />	Feb 25,2018 
											<br />	 7:00 PM 
											<br />	 Cedar Park Center<br />	
											<a href="https://austin.eventful.com/events/mercyme-/E0-001-108401219-1" target="_blank">
												<span className="badge badge-primary badge-pill">Buy Tickets</span>
											</a> 
										</p>
										
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<img className="concert-img" src="https://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/010/408/857-0.png_/the-avett-brothers-57.png"/>
										<p className="concert-text">
											<a href="../artists/artist1.html">The Avett Brothers Plus Asleep at the Wheel in Austin</a>  
											<br />	Mar 3, 2018 
											<br />	 8:00 PM 
											<br />	The Long Center<br />	
											<a href="https://austin.eventful.com/events/avett-brothers-plus-asleep-wheel-/E0-001-108015350-6" target="_blank">
												<span className="badge badge-primary badge-pill">Buy Tickets</span>
											</a> 
										</p>				
										
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<img className="concert-img" src="https://d1marr3m5x4iac.cloudfront.net/images/block250/I0-001/004/216/435-2.jpeg_/styx-35.jpeg"/>
										<p className="concert-text">
											<a href="../artists/artist1.html">Styx</a>
											<br />	Jul 31, 2018 
											<br />	 7:00 PM 
											<br />	 Cedar Park Center<br />	
											<a href="https://austin.eventful.com/events/styx-/E0-001-104032053-7" target="_blank">
												<span className="badge badge-primary badge-pill">Buy Tickets</span>
											</a>
										</p>
										 
									</li>
								</ul>
						</div>
					</center>
					<br />	
					<br />	

				</main>	
				<Footer />
			</div>
		);
	}
} 
export default CityInstance;