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
				cris : 62,
				chia : 9,
				faiz : 3, 
				laur : 76, 
				sabr : 0, 
				total : 0	
			}
		};
	}

	getRequestLength(fullUrl, user, item) {
		$.ajax({
			url: fullUrl + "&per_page=999",
			dataType: 'json',
			cache: false,
			success: function(data) {

				console.log(fullUrl);
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
							this.setState({commits: obj});
							break;

						case "issues" :
							obj[user] = this.state[item][user] + data.length;
							this.setState({issues: obj});
							break;

						case "tests" :
							obj[user] = this.state[item][user] + data.length;
							this.setState({tests: obj});
							break;

						default :
							break;
					}
			}.bind(this),
			error: function(xhr, status, error) {
				console.log(xhr);
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
		let tests_total = this.sum(this.state.tests);

		var state = this.state;
		var memberData = {
			'chiahua': {
				"image": ChiaHua,
				"name": "Chia-Hua Lu",
				"bio1": "I am a junior of Computer Science. I also serve as the Senior Officer of Webmastering for ACM.",
				"bio2":"I designed the About page, was in charge of the front end aspect of the All and Instance pages, and assisted Cristina with managing the Python files and the server.",
				"commits": state.commits.chia,
				"issues": state.issues.chia,
				"tests": state.tests.chia
			}, 
			'cristina': {
				"image": Cristina,
				"name": "Cristina Anderson",
				"bio1": "I am a senior Computer Science major with a focus in graphics. I am also the president of Crafter's Circle, the UT crafting club! A fun fact about me is that I committed two felonies in Canada",
				"bio2":"My major responsibilities were mainly the backend and documentation.",
				"commits": state.commits.cris,
				"issues": state.issues.cris,
				"tests": state.tests.cris
			},
			'faiz': {
				"image": Faiz,
				"name": "Faiz Merchant",
				"bio1": "I am a sophomore Computer Science major. I enjoy working on personal projects and have an interest in AI. ",
				"bio2":"I designed the pages for all the models where you can look at all the instances, but I mainly worked on the scraper and backend aspects of the website.",
				"commits": state.commits.faiz,
				"issues": state.issues.faiz,
				"tests": state.tests.faiz
			},
			'laurence': {
				"image": Laurence,
				"name": "Laurence Zhang",
				"bio1": "I am a senior at UT majoring in Computer Science. Fun fact about me is that I'm a twin.",
				"bio2":"I designed the splash page with Bootstrap, and the instances pages for Artists and Albums. Contributed to the website's design and documentation, and was in charge of the front end tests.",
				"commits": state.commits.laur,
				"issues": state.issues.laur,
				"tests": state.tests.laur
			},
			'sabrina': {
				"image": Sabrina,
				"name": "Sabrina Herrero",
				"bio1": "I'm a junior Computer Science major. I am also the president of HACS, social officer in ACM, and communications officer in Crafter's Circle!",
				"bio2":"I designed the pages for the city model and found the APIs that we are using. I mainly worked on the MusePy API and the database. I also assisted the front end team members with API calls.",
				"commits": state.commits.sabr,
				"issues": state.issues.sabr,
				"tests": state.tests.sabr
			}
		}
		let names = ["chiahua", "cristina", "faiz", "laurence", "sabrina"];
		let allMembers = names.map(member => {
			return(
				<div className="team-member-card card-shadows about-cards">
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
		});

		return(
			<div className="pageContent">
				<Navigation activeTab={"about"}/> 

				<main role="main">

					<div className="container marketing">

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
								<p className="lead">On the Cities model, we will provide information on Cities, such as what popular genres are in this city, upcoming concerts, the city playlist, and links to songs from the city playlist.</p>
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
								<center>
									<div className="statistics">Number of Commits: <span id="commits-all">{ commits_total }</span><br />
															Number of Issues: <span id="issues-all">{ issues_total }</span><br />
															Number of Tests: <span id="tests-all">{ tests_total }</span>
									</div>	
								</center>	
							</div>
						</div>

		       			<hr />
						
						<div className="row featurette">
							<div>
								<h2 className="featurette-heading-orange">Data Sources</h2>
								<p className="lead">We used the APIs available for <a href="https://developer.spotify.com/web-api/endpoint-reference/">Spotify</a>, <a href="http://api.eventful.com/docs">Eventful</a>, <a href="https://developer.musixmatch.com/documentation/api-methods">Musixmatch</a>, and <a href="https://www.last.fm/api/intro">last.fm</a>. The Spotify playlist gave us info about artists, albums, and songs. The Musixmatch API allowed for us to display lyrics for songs that had them available. Last.fm gave us the biographies of artists if available. All the APIs except eventful responsed in JSON, which we then made into a dict object. Eventful responded in XML so we used a python module xmljson to convert the XML to JSON</p>
								<p className="lead">We first started with a list of hardcoded Cities. Using Spotify API, we looked for the playlists of those cities. This gave us a lot of songs. We can then populate our database with those songs' albums and artists. Next, we used the other APIs Eventful, Musixmatch, and last.fm as described above, on the songs in order to populate our database.</p>
							</div>
						</div>

						<hr />

						<div className="row featurette">
							<div>
								<h2 className="featurette-heading-orange">Tools Used</h2>
								<div className="lead">
									<center>
										<ul id="tools">
											<li className="card-shadows about-cards"><div><a href="http://flask.pocoo.org/" target="_blank"><h3>Flask</h3></a><p>Web framework in Python</p></div><img src="https://opbeat.com/docs/static/images/stacks/logo_flask.svg" /></li>
											<li className="card-shadows about-cards"><div><a href="http://flask-sqlalchemy.pocoo.org/2.3/" target="_blank"><h3>Flask SQL Alchemy</h3></a><p>Extension for Flask that aims to simplify using SQLAlchemy with Flask</p></div><img src="http://flask-sqlalchemy.pocoo.org/2.3/_static/flask-sqlalchemy-logo.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://flask-restless.readthedocs.io/en/stable/" target="_blank"><h3>Flask Restless</h3></a><p>provides simple generation of ReSTful APIs that send and receive messages in JSON format.</p></div><img src="http://flask-restless.readthedocs.io/en/stable/_static/flask-restless-small.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://github.com/" target="_blank"><h3>Github</h3></a><p>Version Control and collaboration tool</p></div><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://www.gitbook.com/" target="_blank"><h3>Gitbook</h3></a><p>Documentation creation tool</p></div><img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/orgs%2Flogos%2Fgitbook%2FLogo.svg?alt=media&token=84da6255-53f6-443c-9ae6-de135cea8cee" /></li>
											<li className="card-shadows about-cards"><div><a href="https://getbootstrap.com/" target="_blank"><h3>Bootstrap</h3></a><p>Website Templates</p></div><img src="https://getbootstrap.com/assets/img/bootstrap-stack.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://www.namecheap.com/" target="_blank"><h3>Namecheap</h3></a><p>Domain Name for our website</p></div><img src="http://www.simplestartup.net/wp-content/uploads/2015/01/namecheap2.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://aws.amazon.com/?nc2=h_lg" target="_blank"><h3>Amazon Web Services</h3></a><p>Web Server and hosting service</p></div><img src="https://i2.wp.com/snowulf.com/wp-content/uploads/2013/05/aws-logo-square-02.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://aws.amazon.com/route53/pricing/" target="_blank"><h3>Route53</h3></a><p>DNS to provide readable URL for server</p></div><img src="https://static1.squarespace.com/static/5500a991e4b0ed07e64029e1/55073e80e4b08d28db62c5a3/55e3a3b3e4b031b2b636db9f/1440981939978/route-53-logo.png?format=500w" /></li>
											<li className="card-shadows about-cards"><div><a href="https://slack.com/features" target="_blank"><h3>Slack</h3></a><p>Team communication and collaboration application</p></div><img src="http://blogs.newschool.edu/digitalhumanities/files/2016/02/Slack_Icon.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://doodle.com/" target="_blank"><h3>Doodle</h3></a><p>Tool to help with scheduling around classes</p></div><img src="https://cdn2.doodle.com/dist/i/7479b568749fca315a2969e30cbee4f5.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://reactjs.org/" target="_blank"><h3>React</h3></a><p>Dynamic Frontend</p></div><img src="https://cdn-images-1.medium.com/max/1600/1*g6s1lvpfArJGorALkKNhvw.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://www.seleniumhq.org/" target="_blank"><h3>Selenium</h3></a><p>Web applications testing</p></div><img src="https://www.seleniumhq.org/images/big-logo.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://www.mysql.com/" target="_blank"><h3>MySQL</h3></a><p>Database to store scraped data</p></div><img src="https://pbs.twimg.com/profile_images/1240079072/logo-mysql-170x170_400x400.png" /></li>
											<li className="card-shadows about-cards"><div><a href="https://www.getpostman.com/products" target="_blank"><h3>Postman</h3></a><p>Application to document and test API</p></div><img src="https://i1.wp.com/thecuriousdev.org/wp-content/uploads/2017/12/gI_62552_200x200_360-logo.png?fit=201%2C201&ssl=1" /></li>
											
										</ul>
									</center>
								</div>
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
export default About;