import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import '../assets/css/about.css';
import ChiaHua from '../assets/images/portraits/chiahua.jpg';
import Cristina from '../assets/images/portraits/cristina.jpg';
import Faiz from '../assets/images/portraits/faiz.jpg';
import Laurence from '../assets/images/portraits/laurence.jpg';
import Sabrina from '../assets/images/portraits/sabrina.jpg';



class About extends Component {

	render() {
		console.log(this);
		let issues_chia = 0;
		let issues_cris = 0;
		let issues_faiz = 0;
		let issues_laur = 0;
		let issues_sabr = 0;
		let issues_total = 0;

		let commits_chia = 0;
		let commits_cris = 0;
		let commits_faiz = 0;
		let commits_laur = 0;
		let commits_sabr = 0;
		let commits_total = 0;

		return(
			<div className="pageContent">
				<Navigation activeTab={"about"}/> 

				<main role="main">


					<div className="container marketing">


						<br />
						<div className="row featurette">
							<div>
								<h2 className="featurette-heading-orange">About this Site, <span className="text-muted">MusePy:</span></h2>
								<p className="lead">This website's purpose is to display music information, providing an easy way for users to look up informations on Artists, their albums, and related songs. Additionally, users will be able to see where the artists will perform in the near future.</p>
							</div>
						</div>

						<hr />

						<div className="row featurette">
							<div>
								<h2 className="featurette-heading-orange">Disparate Data, <span className="text-muted">Cities of upcoming Performancess.</span></h2>
								<p className="lead">On the Cities model, we will provide information on Cities, such as what popular genras are in this city, upcoming concerts, the city playlist, and links to songs from the city playlist.</p>
							</div>
						</div>

						<hr />

						<div className="row" id="our-team">
							<center>
								<h2 className="featurette-heading">Requiem For Our Dreams</h2>
								<br />
								<div className="team-member-card card-shadows">
									<img className="rounded-circle" src={ChiaHua} alt="Chia-Hua Lu" height="140" />
									<h2>Chia-Hua Lu</h2>
									<p>I am a junior of Computer Science. I also serve as the Senior Officer of Webmastering for ACM.</p>
									<p>I designed the About page, contributed to the design, layout, and style of many of the other pages, and assisting Cristina with managing the Python files and the server. </p>
									<div className="statistics">Number of Commits: <span id="commits-chia">{commits_chia}</span><br />
															Number of Issues: <span id="issues-chia">{issues_chia}</span><br />
															Number of Tests: <span id="tests-chia">0</span>
									</div>						
								</div>

								<div className="team-member-card card-shadows">
									<img className="rounded-circle" src={Cristina} alt="Cristina Anderson" height="140" />
									<h2>Cristina Anderson</h2>
									<p>I am a senior Computer Science major with a focus in graphics. I am also the president of Crafter's Circle, the UT crafting club! A fun fact about me is that I committed two felonies in Canada</p>
									<p>My major responsibilities were the backend, coding with Python and Flask</p>
									<div className="statistics">Number of Commits: <span id="commits-cris">{commits_cris}</span><br />
															Number of Issues: <span id="issues-cris">{issues_cris}</span><br />
															Number of Tests: <span id="tests-cris">0</span>
									</div>
								</div>
								<div className="team-member-card card-shadows">
									<img className="rounded-circle" src={Faiz} alt="Faiz Merchant" height="140" />
									<h2>Faiz Merchant</h2>
									<p>I am a sophomore Computer Science major. I enjoy working on personal projects and have an interest in AI. </p>
									<p>I worked mainly on frontend development. I created the pages for all the models where you can look at all the instances, and also creates the pages for the song instances.</p>
									<div className="statistics">Number of Commits: <span id="commits-faiz">{ commits_faiz }</span><br />
															Number of Issues: <span id="issues-faiz">{ issues_faiz }</span><br />
															Number of Tests: <span id="tests-faiz">0</span>
									</div>
								</div>
								<div className="team-member-card card-shadows">
									<img className="rounded-circle" src={Laurence} alt="Laurence Zhang" height="140" />
									<h2>Laurence Zhang</h2>
									<p>I am a senior at UT majoring in Computer Science. Fun fact about me is that I'm a twin.</p>
									<p>Designed the splash page with Bootstrap. Also designed the instances for Artists and Albums. Contributed to the website's API design and documentation.</p>
									<div className="statistics">Number of Commits: <span id="commits-laur">{ commits_laur }</span><br />
															Number of Issues: <span id="issues-laur">{ issues_laur }</span><br />
															Number of Tests: <span id="tests-laur">0</span>
									</div>
								</div>
								<div className="team-member-card card-shadows">
									<img className="rounded-circle" src={Sabrina} alt="Sabrina Herrero" height="140" />
									<h2>Sabrina Herrero</h2>
									<p>I'm a junior Computer Science major. I am also the president of HACS, social officer in ACM, and communications officer in Crafter's Circle!</p>
									<p>I designed and created the pages for the city model. I also found APIs that we are using. </p>
									<div className="statistics">Number of Commits: <span id="commits-sabr">{ commits_sabr }</span><br />
															Number of Issues: <span id="issues-sabr">{ issues_sabr }</span><br />
															Number of Tests: <span id="tests-sabr">0</span>
									</div>						
								</div>
							</center>
						</div>

						<hr />
						<div className="row featurette">
							<div id="statistics-all">
								<h2 className="featurette-heading-orange">Total Statistics</h2>
								<br />
								<div className="statistics">Number of Commits: <span id="commits-all">{ commits_total }</span><br />
														Number of Issues: <span id="issues-all">{ issues_total }</span><br />
														Number of Tests: <span id="tests-all">0</span>
								</div>		
							</div>
						</div>

		       			<hr />
		        
						<div className="row featurette">
							<div>
								<h2 className="featurette-heading-orange">Data Sources</h2>
								<p className="lead">The APIs we used, and description of how it was scraped</p>
							</div>
						</div>

						<hr />

						<div className="row featurette">
							<div>
								<h2 className="featurette-heading-orange">Tools Used</h2>
								<p className="lead">
									<ul>
										<li><h3>Flask</h3><p>Web framework in Python</p></li>
										<li><h3>Github</h3><p>Version Control and collaboration tool</p></li>
										<li><h3>Gitbook</h3><p>Documentation creation tool</p></li>
										<li><h3>Bootstrap</h3><p>Website Templates</p></li>
										<li><h3>Namecheap</h3><p>Domain Name for our website</p></li>
										<li><h3>Amazon Web Services</h3><p>Web Server and hosting service</p></li>
										<li><h3>Slack</h3><p>Team communication and collaboration application</p></li>
										<li><h3>Doodle</h3><p>Tool to help with scheduling around classes</p></li>
									</ul>

								</p>
							</div>
						</div>

						<hr className="featurette-divider" />
						
					</div>
				</main>
				<Footer />
			</div>
			
		);
	}
} 
export default About;