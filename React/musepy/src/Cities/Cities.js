import React, { Component } from 'react';
import Navigation from '../HeaderAndFooter/Navigation';
import Footer from '../HeaderAndFooter/Footer';
import PageNotFound from '../PageNotFound';
import '../assets/css/modelpage.css';
import CitySlide from '../assets/images/citymodel.jpg';
import URL from '../URLSpaceUnderscore';
import Loading from '../assets/images/loadingHorizontal.gif';



class Cities extends Component {
	constructor() {
		super();
		this.state = {
			doneLoading: true,
			allCities:[ 
				{
				    "city": "Houston",
				    "state": "Texas",
				    "country": "USA",
				    "latitude": "95.3698° W",
				    "longitude": "29.7604° N",
				    "population": 2303000,
				    "upcoming concerts": [
				        "Kesha",
				        "Khalid"
				    ],
				    "image": "https://i.scdn.co/image/2efc93d7ee88435116093274980f04ebceb7b527",
				    "concert venues": [
				        "House of Blues", 
				        "White Oak Music Hall"
				    ],
				    "popular song playlist": [
				        "Rockstar: Post Malone", 
				        "God's Plan: Drake", 
				        "Mine: Bazzi", 
				        "Stir Fry: Migos", 
				        "The Middle: Zedd"
				    ]
				},{
				    "city": "Houston",
				    "state": "Texas",
				    "country": "USA",
				    "latitude": "95.3698° W",
				    "longitude": "29.7604° N",
				    "population": 2303000,
				    "upcoming concerts": [
				        "Kesha",
				        "Khalid"
				    ],
				    "image": "https://i.scdn.co/image/2efc93d7ee88435116093274980f04ebceb7b527",
				    "concert venues": [
				        "House of Blues", 
				        "White Oak Music Hall"
				    ],
				    "popular song playlist": [
				        "Rockstar: Post Malone", 
				        "God's Plan: Drake", 
				        "Mine: Bazzi", 
				        "Stir Fry: Migos", 
				        "The Middle: Zedd"
				    ]
				},{
				    "city": "Houston",
				    "state": "Texas",
				    "country": "USA",
				    "latitude": "95.3698° W",
				    "longitude": "29.7604° N",
				    "population": 2303000,
				    "upcoming concerts": [
				        "Kesha",
				        "Khalid"
				    ],
				    "image": "https://i.scdn.co/image/2efc93d7ee88435116093274980f04ebceb7b527",
				    "concert venues": [
				        "House of Blues", 
				        "White Oak Music Hall"
				    ],
				    "popular song playlist": [
				        "Rockstar: Post Malone", 
				        "God's Plan: Drake", 
				        "Mine: Bazzi", 
				        "Stir Fry: Migos", 
				        "The Middle: Zedd"
				    ]
				}
			]

		}
	}
	render() {
		var allCities = <center><img src={Loading} className="pageLoadingIndicator" /></center>;
		if (this.state.doneLoading) {
			allCities = this.state.allCities.map(city => {
				return(
					<div className="card-shadows-orange model-cards modelCard">
						<div className="ingrid" text-align="center">
						  <img className="rounded-circle" src={city["image"]} alt="Generic placeholder image" width="140" height="140" />
						  <h2>{city["city"]}</h2><p>{city["state"]}</p>
						  <p><a className="btn btn-secondary" href={"/cities/" + URL.toUrl(city["city"])+"-"+ URL.toUrl(city["state"])} role="button">View &raquo;</a></p>
						</div>
					</div>
				);
			});
		}

		return(
			<div className="pageContent">
				<Navigation activeTab={"cities"}/> 

				<main role="main">
		            <div align="center">
		                
		                <div class="carousel-item titleImage active">
		                    <img class="fourth-slide" src={CitySlide} alt="Fourth slide"/>
		                    <div class="container">
		                        <div class="carousel-caption text-right">
		                            <h1><span>Connect</span> with your city.</h1>
		                           
		                        </div>
		                    </div>
		                </div>
		            </div>
		            
					<div class="container">
						<hr/>
						<center><h1>Cities</h1></center>
		                <hr/>
		            </div>
		            <div class="container2 marketing">
						<div class="row">
						<center>
		                   {allCities}
		                </center>
		                </div>
		            </div>
		            <div class="container">
		                <hr/>
	            	</div>
	            </main>
				
				<Footer />

			</div>
		);
	}
} 
export default Cities;