import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/song_instance.css';
import URL from '../URLSpaceUnderscore';

class SongInstance extends Component {

	constructor() {
		super();
		this.state = {
			doneLoading: false,
			video: "http://www.mksp.in/images/loading.gif",
			songName: URL.toString(URL.lastUrlItem(0)),
			songArtist: URL.toString(URL.lastUrlItem(1)),
			song: {
				"name": "goosebumps",
				"length": "4:03",
				"genre": "hip hop", 
				"artist": "Travis Scott", 
				"url": "https://open.spotify.com/embed/track/6gBFPUFcJLzWGx4lenP6h2",
				"producer": [
					"Cardo", 
					"Yung Exclusive", 
					"Cubeatz", 
					"Dean"
				],
				"release date": "December 13, 2016", 
				"album": "Birds in the Trap Sing McKnight", 
				"album art": "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
				"artist image": "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
				"lyrics": "[Intro: Travis Scott]\n	Yeah\n	7:30 in the night\n	Ooooh ooh\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time, yeah\n	\n	[Verse 1: Travis Scott]\n	7-1-3 to the 2-8-1, yeah I'm riding\n	Why they on me? Why they on me? I'm flyin'\n	Sippin' lowkey I'm sipping lowkey in Onyx\n	Rider, rider when I'm pullin' up right beside ya\n	Popstar, lil' Mariah\n	When I text a cute game, wildness\n	Throw a stack on the Bible\n	Never Snapchat or took molly\n	She fall through plenty, her and all her ginnies\n	Yeah, we at the top floor, right there off Doheny\n	Oh no, I can't fuck with y'all\n	Yea, when I'm with my squad I cannot do no wrong\n	Yeah, saucing in the city, don't get misinformed, yea\n	They gon' pull up on you (brr, brr, brr)\n	Yeah, we gon' do some things, some things you can't relate\n	Yeah, cause we from a place, a place you cannot stay\n	Oh, you can't go, oh, I don't know\n	Oh, back the fuck up off me (brr, brr, brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n	\n	[Verse 2: Kendrick Lamar]\n	I want to press my like, yeah, I wanna press my\n	I want a green light, I wanna be like\n	I wanna press my line, yeah\n	I want to take that ride, yeah\n	I’m gonna press my line\n	I wanna green light, I wanna be like, I wanna press my\n	Mama, dear, spare your feelings\n	I'm reliving moments, peeling more residual\n	(I can) buy the building, burn the building, take your bitch, rebuild the building just to fuck some more\n	(I can) justify my love for you and touch the sky for God to stop, debating war\n	Put the pussy on a pedestal\n	Put the pussy on a high horse\n	That pussy to die for\n	That pussy to die for\n	Peter, piper, picked a pepper\n	So I could pick your brain and put your heart together\n	We depart the shady parts and party hard, the diamonds yours\n	The coupe forever\n	My best shots might shoot forever like (brr)\n	\n	[Hook: Travis Scott]\n	I get those goosebumps every time, yeah, you come around, yeah\n	You ease my mind, you make everything feel fine\n	Worry about those comments\n	I'm way too numb, yeah, it's way too dumb, yeah\n	I get those goosebumps every time, I need the Heimlich\n	Throw that to the side, yeah\n	I get those goosebumps every time, yeah, when you're not around\n	When you throw that to the side, yeah\n	I get those goosebumps every time\n",
				"country of origin": "USA",
				"features": [
					"Kendrick Lamar"
				],
				"popular cities": [
					"Austin", 
					"Dallas", 
					"Florida", 
					"Houston", 
					"New York"
				]
			}
		};
	}



	render() {
		let lyricsPartsArray = this.state.song.lyrics.split("\n");
		let allLyricsParts = lyricsPartsArray.map(lyricsPart => {
			return(
				<span>{lyricsPart} <br/></span>
			);
		});
		return(
			<div className="pageContent">
				<Navigation activeTab={"songs"}/> 

				<main role="main">
					<div align="center">
						<br />
						<h1>{this.state.songName}</h1><h6>by {this.state.songArtist}</h6>
					</div>
					<div className="container">
						<hr />
					</div>
					<div className="container marketing">
						<div className="row">
							<div className="lyricsCol">
								<div className="ingrid" text-align="center">
									<h3>Lyrics</h3><br />
									{allLyricsParts}
								</div>
							</div>
							
							<div className="mediaCol">
								<div className="ingrid" text-align="center">
									<iframe src={this.state.song.url} frameborder="0" className="songPlayer" allowtransparency="true"></iframe>
									
									<hr />
									<p align="left"><a className="btn btn-secondary btn-lg" href={"/artists/" + URL.toUrl(this.state.song.artist)} role="button">View this Artist &raquo;</a></p>
									<p align="left"><a className="btn btn-secondary btn-lg" href={"/albums/" + URL.toUrl(this.state.song.album)} role="button">View this Album &raquo;</a></p>
									</div>
							</div>
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
export default SongInstance;

/*
Not Enough Information:
									<p><a className="btn btn-success btn-sm" href="https://itunes.apple.com/us/album/rainbow/1253688426" role="button">Purchase &raquo;</a></p>
									<p align="left"><a className="btn btn-secondary btn-lg" href="#" role="button">View Other Music from this City &raquo;</a></p>


*/