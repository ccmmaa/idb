import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/artist_instance.css';
import Black from '../assets/images/black_background.jpg';
import album1 from '../assets/images/travis_scott_huncho.jpg';
import album2 from '../assets/images/travis_scott_album.jpg';
import album3 from '../assets/images/travis_scott_rodeo.jpg';
import banner from '../assets/images/banner.jpg';





class ArtistInstance extends Component {
	constructor() {
		super();
		this.state= {
			songFound: false,
			doneLoading: false,
			artist: {
			    "name": "Travis Scott",
			    "age": 25,
    			doneLoading: false,
			    albums: [
			        "Huncho Jack, Jack Huncho",
			        "Birds in the Trap Sing McKnight",
			        "Rodeo"
			    ],
			    popular_songs: [
			        "goosebumps",
			        "Butterfly Effect",
			        "Saint",
			        "beibs in the trap",
			        "pick up the phone"
			    ],
			    birthplace: "Houston, TX",
			    genres: [
			        "Hip-Hop"
			    ],
			    gender: "male",
			    image_url : "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
			    related_artists: [
			        "Vic Mensa",
			        "Mike WILL Made-it",
			        "A$AP Rocky",
			        "Young Thug",
			        "Chief Keef",
			        "Desiigner",
			        "21 Savage"
			    ],
			    bio: "Travis Scott is the stage name of Jacques Webster, a Houston-born hip-hop artist and producer affiliated with Kanye West\'s GOOD Music and T.I.\'s Grand Hustle. Scott has a heavily Auto-Tuned half-sung/half-rapped vocal style, and refers to himself as a singer rather than a rapper. He\'s produced or co-produced tracks by Kanye West, Rihanna, and Drake, and he\'s appeared on tracks by Jay-Z, Pusha T, Meek Mill, and numerous others. Within four years of his 2012 mainstream arrival, Scott attained platinum singles as a lead artist and songwriter/producer, as well as a pair of Top Five studio albums, the latter of which went to number one. Scott grew up in a suburb of Houston and began making music as a teenager. He formed a duo called the Graduates with Chris Holloway, and they released an EP in 2009. The following year he formed another duo, the Classmates, with OG Chess. Scott produced the duo\'s two full-lengths, Buddy Rich and Cruis\'n USA, and the duo broke up by the end of 2011. After dropping out of college, Scott moved to Los Angeles and began recording music on his own. He met T.I. and eventually Kanye West. Scott was hired as an in-house producer for GOOD Music, and appeared on the label\'s Cruel Summer compilation in 2012. Scott\'s debut, Owl Pharaoh, was originally scheduled to be released as a free mixtape in 2012, but as his profile grew (including a placement in XXL Magazine\'s Freshman Class of 2013), and due to sample clearance issues, the album wasn\'t released until May of 2013. Featuring guest appearances by T.I. and 2 Chainz (on the single \"Upper Echelon\") as well as Toro y Moi and Justin Vernon of Bon Iver, the mixtape eventually garnered a nomination for Best Mixtape at the 2013 BET Hip Hop Awards. The buildup to Scott\'s first proper studio album involved the Days Before Rodeo mixtape, promoted with the singles \"Don\'t Play\" and \"Mamacita,\" and the March 2015 U.S. Rodeo Tour, for which Scott headlined, supported by Young Thug and Metro Boomin. Several of the dates sold out. During the same month, Rihanna\'s Scott-produced hit single \"Bitch Better Have My Money\" was released. \"3500\" and \"Antidote\" were released ahead of Rodeo, Scott\'s second full-length, which followed in September on Grand Hustle/Epic and debuted at number three on the Billboard 200. Toward the end of the year, \"Antidote\" peaked at number 16 on the Hot 100 and became Scott\'s first platinum single. Chatter regarding a follow-up, along with numerous delays, ensued throughout much of 2016. Meanwhile, Scott extended his commercial presence with featured spots on Wiz Khalifa\'s \"Bake Sale,\" Rihanna\'s \"Woo,\" and Kanye West\'s \"FML,\" as well as a collaboration with Young Thug and Quavo, \"Pick Up the Phone,\" a mid-year hit issued as the lead single of Young Thug\'s JEFFERY. Three months later, after \"Bitch Better Have My Money\" earned a platinum certification, Scott\'s second proper album arrived. Titled Birds in the Trap Sing McKnight, after one of Quavo\'s lines in \"Pick Up the Phone,\" the woozy, mostly midtempo set featured that hit and contributions from the likes of André 3000, Kid Cudi, and Kendrick Lamar. It went straight to the top of the Billboard 200. Leading up to his third LP, Scott appeared on \"Kelly Price\" from Migos\' Culture and on Drake\'s \"Portland\" from the More Life project. The latter track peaked within the Top Ten of the Hot 100, Scott\'s highest chart placement to date. In 2017 Scott dropped the hazy, Migos-esque single \"Butterfly Effect\" and Huncho Jack, Jack Huncho, a collaborative project with Quavo."
			}
		}
	}

	render() {
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
													 <h1>Travis Scott</h1>
											 </div>
											 <div className="carousel-caption text-right">
													 <h3><span>Genres:</span> Hip-hop</h3>
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
								<h2>Albums</h2>
							</div>

							<div className="row">
								<div className="col-lg-2">
									<div className="ingrid" text-align="center">
										<img className="rounded-0" src={album1} alt="Generic placeholder image" width="100%" height="100%" />
										<h4><a href="album_error.html">Huncho Jack, Jack Huncho</a></h4>
									</div>
								</div>
								<div className="col-lg-2">
									<div className="ingrid" text-align="center">
										<img className="rounded-0" src={album2} alt="Generic placeholder image" width="100%" height="100%" />
										<h4><a href="../albums/album2.html">Birds In The Trap Sing McKnight</a></h4>
									</div>
								</div>
								<div className="col-lg-2">
									<div className="ingrid" text-align="center">
										<img className="rounded-0" src={album3} alt="Generic placeholder image" width="100%" height="100%" />
										<h4><a href="album_error.html">Rodeo</a></h4>
									</div>
								</div>

							</div>
						</div>

						<hr />
						<br />
						<div className="container">
							<div className="row">
								<div className="col-lg-4">
									<p className= "h2">Popular Songs</p>
									<ul className="list-group list-group-flush">
										<li className="list-group-item"><a href="../songs/song2.html">goosebumps</a></li>
										<li className="list-group-item"><a href="song_error.html">Butterfly Effect</a></li>
										<li className="list-group-item"><a href="song_error.html">Saint</a></li>
										<li className="list-group-item"><a href="song_error.html">beibs in the trap</a></li>
										<li className="list-group-item"><a href="song_error.html">pick up the phone</a></li>
									</ul>
								</div>

								<div className="col-lg-1"></div>

								<div className="col-lg-7">
									<p className = "h2">Upcoming Concerts</p>
									<ul className="list-group">
										<li className="list-group-item d-flex justify-content-between align-items-center"><a href="city_error.html">Okeechobee, FL</a>
											<span className="badge badge-primary badge-pill">March 3, 2017</span>
										</li>
										<li className="list-group-item d-flex justify-content-between align-items-center"><a href="../cities/city2.html">New York, New York</a>
											<span className="badge badge-primary badge-pill">June 2, 2017</span>
										</li>
									</ul>
								</div>
							</div>

							<br />
							<br />
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
