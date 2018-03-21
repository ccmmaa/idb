import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/city_instance.css';
import URL from '../URLSpaceUnderscore';


class CityInstance extends Component {

	constructor() {
		super();
		this.state = {
			cityData:
			{
				"city_id": 1,
				"concerts": [],
				"image": "http://www.celebrityslice.com/wp-content/uploads/2015/08/city-wallpaper-7.jpg",
				"name": "Austin",
				"playlist": "https://open.spotify.com/user/thesoundsofspotify/playlist/3gz7G6lax8nkXZ3vBr3n4i",
				"state": "Texas"
			}
		}
	}

	render() {
		let albumSongs = <li>Not Yet Implemented</li>;
		// let albumSongs = this.state.cityData.albums.map(album => {
		// 	return(
		// 		<li className="list-group-item"><a href="../songs/song1.html">In My Arms Instead - Randy Rogers Band</a></li>
		// 	);
		// });
		return(
			<div className="pageContent">
				<Navigation activeTab={"cities"}/> 

				<main role="main">

					<div align="center">
						<div className="carousel-item titleImage active">
							<img className="fourth-slide" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_Evening.jpg/1200px-Austin_Evening.jpg" alt="Austin City Skyline" />
							<div className="container">
								<div className="carousel-caption text-right">
									<h1><span>{this.state.cityData.name+ ","}</span> {this.state.cityData.state}</h1>
								</div>
							</div>
						</div>
					</div>   
					<div class="container">
						<hr/>
					</div>
										
					<div className="container">
						<div className="row mapPart1">
							<div id="map">
								<iframe src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBLzbYgNk0kZtGmqrS52qbvW0zZi43WeFw&q=" + URL.convert(this.state.cityData.name + "+" + this.state.cityData.state), ' ', '+'} allowfullscreen className="mapIframe" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
							</div>


							<div id="playlist">
								<p class = "h2">The Sound of <br />	{this.state.cityData.name}, {this.state.cityData.state}</p>
								<iframe id="spotify" className="shadow" src={this.state.cityData.playlist} width="450" height="80" frameborder="0" allowtransparency="true"></iframe>
								
								<ul className="list-group list-group-flush">
									{albumSongs}
									
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
					<div class="container">
						<hr/>
					</div>

				</main>	
				<Footer />
			</div>
		);
	}
} 
export default CityInstance;