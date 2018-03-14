import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import TeamMember from './TeamMember';
import '../assets/css/about.css';
import ChiaHua from '../assets/images/portraits/chiahua.jpg';
import Cristina from '../assets/images/portraits/cristina.jpg';
import Faiz from '../assets/images/portraits/faiz.jpg';
import Laurence from '../assets/images/portraits/laurence.jpg';
import Sabrina from '../assets/images/portraits/sabrina.jpg';
import $ from 'jquery';


class About extends Component {

	constructor() {
		super();
		this.state = {
			testing: "Initial",
			commits: {
				cris : 0,
				chia : 0,
				faiz : 0, 
				laur : 0, 
				sabr : 0, 
				total : 0	
			},
			issues: {
				cris : 0,
				chia : 0,
				faiz : 0, 
				laur : 0, 
				sabr : 0, 
				total : 0	
			},
			tests: {
				cris : 0,
				chia : 0,
				faiz : 0, 
				laur : 0, 
				sabr : 0, 
				total : 0	
			}
			
		}
	}

	getRequestLength(fullUrl, user, item) {
		$.ajax({
			url: fullUrl,
			dataType: 'json',
			cache: false,
			success: function(data) {

				console.log("get data from api success");
				var obj = {
								cris : this.state[item]["cris"],
								chia : this.state[item]["chia"],
								faiz : this.state[item]["faiz"], 
								laur : this.state[item]["laur"], 
								sabr : this.state[item]["sabr"], 
								total : 0	
							};

				switch(item) {
						case "commits" :
							
							obj[user] = this.state[item][user] + data.length;
							this.setState({
								commits: obj
							});
							break;
						case "issues" :
							obj[user] = this.state[item][user] + data.length;
							this.setState({
								issues: obj
							});
							break;
						case "tests" :
							obj[user] = this.state[item][user] + data.length;
							this.setState({
								tests: obj
							});
							break;
						default :
							break;
						// case "issues" :
						// 	issues[user] : this.state[item][user] + data.length;
						// case "tests" :
						// 	tests[user] : this.state[item][user] + data.length;
					}
				// this.setState((prevState) => {
					

				// 	// prevState[item][user] += data.length;
				// });
				// console.log("State: " + this.state[item][user]);
				// 		console.log("After Api" + this.state.commits.cris);

				// this.render();
			}.bind(this),
			error: function(xhr, status, error) {
				console.log("Get ERROR: " + error);
				// this.setState((prevState) => {
				// 	prevState[item][user] = 0;
				// });
			}
		});
	}

	get() {
		$.ajax({
			url: 'https://api.github.com/repos/ccmmaa/idb/stats/contributors',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({
					testing: data[0]["author"]["login"]
				});
				// console.log(data);
			}.bind(this),
			error: function(xhr, status, error) {
				console.log("Get ERROR: " + error);
				
			}
		});
	}

	url_commits(specifier) {
		return 'https://api.github.com/repos/ccmmaa/idb/commits?client_id=a08ccbc00587ed5ca731;client_secret=13e2285176b791bc3ebed203d4c627fa6f2d3d80;' + specifier;
	}
	url_issues(specifier) {
		return 'https://api.github.com/repos/ccmmaa/idb/issues?client_id=a08ccbc00587ed5ca731;client_secret=13e2285176b791bc3ebed203d4c627fa6f2d3d80;' + specifier;
	}

	getGithubCommits() {		

		let cris_commits_1 = this.getRequestLength(this.url_commits('author=ccmmaa'), "cris", "commits");
		let cris_commits_2 = this.getRequestLength(this.url_commits('author=ccmmaa@cs.utexas.edu'), "cris", "commits");
		let cris_issues = this.getRequestLength(this.url_issues('creator=ccmmaa;state=all'), "cris", "issues");
		
		let chia_commits_1 = this.getRequestLength(this.url_commits('author=chiahualu'), "chia", "commits");
		let chia_commits_2 = this.getRequestLength(this.url_commits('author=noreply@github.com'), "chia", "commits");
		let chia_issues = this.getRequestLength(this.url_issues('creator=chiahualu;state=all'), "chia", "issues");

		let faiz_commits_1 = this.getRequestLength(this.url_commits('author=faizm123'), "faiz", "commits");
		let faiz_commits_2 = this.getRequestLength(this.url_commits('author=faizmerchant@wireless-10-145-231-18.public.utexas.edu'), "faiz", "commits");
		let faiz_commits_3 = this.getRequestLength(this.url_commits('author=faizmerchant@wireless-10-147-115-189.public.utexas.edu'), "faiz", "commits");
		let faiz_commits_4 = this.getRequestLength(this.url_commits('author=faizmerchant@fma.local'), "faiz", "commits");
		let faiz_issues = this.getRequestLength(this.url_issues('creator=Faiz-Merchant;state=all'), "faiz", "issues");

		let laur_commits = this.getRequestLength(this.url_commits('author=Laurencez'), "laur", "commits");
		let laur_issues = this.getRequestLength(this.url_issues('creator=Laurencez;state=all'), "laur", "issues");

		let sabr_commits = this.getRequestLength(this.url_commits('author=SabrinaHerrero'), "sabr", "commits");
		let sabr_issues = this.getRequestLength(this.url_issues('creator=SabrinaHerrero;state=all'),  "sabr", "issues");


	}

	componentWillMount() {
		this.getGithubCommits();
	}

	sum(parameter) {
		var result = 0;
		for (let keys in parameter) {
			result += parameter[keys];
		}
		return result;
	}

	render() {
		let commits_total = this.sum(this.state.commits);
		let issues_total = this.sum(this.state.issues);


		// // let commits_chia = commits.chia;
		// // let commits_cris = commits.cris;
		// // let commits_faiz = commits.faiz;
		// // let commits_laur = commits.laur;
		// // let commits_sabr = commits.sab;
		// // let commits_total = commits.total;

		// let commits_chia = 0;
		// let commits_cris = this.state.commits.cris;
		// let commits_faiz = 0;
		// let commits_laur =0;
		// let commits_sabr = 0;
		var state = this.state;
		var memberData = {
			'chiahua': {
				"image": ChiaHua,
				"name": "Chia-Hua Lu",
				"bio1": "I am a junior of Computer Science. I also serve as the Senior Officer of Webmastering for ACM.",
				"bio2":"I designed the About page, contributed to the design, layout, and style of many of the other pages, and assisting Cristina with managing the Python files and the server.",
				"commits": state.commits.chia,
				"issues": state.issues.chia,
				"tests": state.tests.chia
			}, 
			'cristina': {
				"image": Cristina,
				"name": "Cristina Anderson",
				"bio1": "I am a senior Computer Science major with a focus in graphics. I am also the president of Crafter's Circle, the UT crafting club! A fun fact about me is that I committed two felonies in Canada",
				"bio2":"My major responsibilities were the backend, coding with Python and Flask",
				"commits": state.commits.cris,
				"issues": state.issues.cris,
				"tests": state.tests.cris
			},
			'faiz': {
				"image": Faiz,
				"name": "Faiz Merchant",
				"bio1": "I am a sophomore Computer Science major. I enjoy working on personal projects and have an interest in AI. ",
				"bio2":"I worked mainly on frontend development. I created the pages for all the models where you can look at all the instances, and also creates the pages for the song instances.",
				"commits": state.commits.faiz,
				"issues": state.issues.faiz,
				"tests": state.tests.faiz
			},
			'laurence': {
				"image": Laurence,
				"name": "Laurence Zhang",
				"bio1": "I am a senior at UT majoring in Computer Science. Fun fact about me is that I'm a twin.",
				"bio2":"Designed the splash page with Bootstrap. Also designed the instances for Artists and Albums. Contributed to the website's API design and documentation.",
				"commits": state.commits.laur,
				"issues": state.issues.laur,
				"tests": state.tests.laur
			},
			'sabrina': {
				"image": Sabrina,
				"name": "Sabrina Herrero",
				"bio1": "I'm a junior Computer Science major. I am also the president of HACS, social officer in ACM, and communications officer in Crafter's Circle!",
				"bio2":"I designed and created the pages for the city model. I also found APIs that we are using.",
				"commits": state.commits.sabr,
				"issues": state.issues.sabr,
				"tests": state.tests.sabr
			}

		}
		console.log("Data Dump: Chia: " + state.commits.chia + ",   Cris: " + state.commits.cris + ",    Faiz: " + state.commits.faiz + ",   Laur: " + state.commits.laur + ",   Sabr: " + state.commits.sabr);

		let names = ["chiahua", "cristina", "faiz", "laurence", "sabrina"];

		let allMembers = names.map(member => {
			// console.log("Experiment" + memberData[member].commits);
			return(
				<div className="team-member-card card-shadows">
					<img className="rounded-circle" src={memberData[member].image} alt={memberData[member].name} height="140" />
					<h2>{memberData[member].name}</h2>
					<p>{memberData[member].bio1}</p>
					<p>{memberData[member].bio2}</p>		
					<div className="statistics">Number of Commits: <span>{memberData[member].commits}</span><br />
											Number of Issues: <span>{memberData[member].issues}</span><br />
											Number of Tests: <span>{memberData[member].tests}</span>
					</div>						
				</div>
			);
		})
		//<TeamMember key={member.name} member={member} />

		return(
			<div className="pageContent">
				<Navigation activeTab={"about"}/> 

				<main role="main">
					<p>{ this.state.testing }</p>


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

								{allMembers}
								
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
								<div className="lead">
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

								</div>
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

/*

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
									<div className="statistics">Number of Commits: <span id="commits-cris">{this.state.commits.cris}</span><br />
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

								*/