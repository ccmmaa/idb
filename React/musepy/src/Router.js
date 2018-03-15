import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from './Home/Index';
import Songs from './Songs/Songs';
import Artists from './Artists/Artists';
import Albums from './Albums/Albums';
import Cities from './Cities/Cities';

import SongInstance from './Songs/SongInstance';
import ArtistInstance from './Artists/ArtistInstance';
import AlbumInstance from './Albums/AlbumInstance';
import CityInstance from './Cities/CityInstance';

import About from './About/About';
// import Something from './Somewhere'

class Router extends Component {

	render() {
		return(
			<Switch>
				<Route exact path="/index" component={Index} />
				<Route exact path="/" component={Index} />
				<Route exact path="/songs" component={Songs} />
				<Route path="/songs/:songID" component={SongInstance} />
				<Route exact path="/artists" component={Artists} />
				<Route path="/artists/:artistID" component={ArtistInstance} />
				<Route exact path="/albums" component={Albums} />
				<Route path="/albums/albumID" component={AlbumInstance} />
				<Route exact path="/cities" component={Cities} />
				<Route path="/cities/:cityID" component={CityInstance} />
				<Route exact path="/about" component={About} />

			</Switch>
		)
	}
}

export default Router;

//				<Route exact path="/" component={Something}/>
