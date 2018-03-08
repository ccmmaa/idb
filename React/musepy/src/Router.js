import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from './Home/Index';
import Songs from './Songs/Songs';
import Artists from './Artists/Artists';
import Albums from './Albums/Albums';
import Cities from './Cities/Cities';
import About from './About/About';
// import Something from './Somewhere'

class Router extends Component {

	render() {
		return(
			<Switch>
				<Route exact path="/index" component={Index} />
				<Route exact path="/" component={Index} />
				<Route exact path="/songs" component={Songs} />
				<Route exact path="/artists" component={Artists} />
				<Route exact path="/albums" component={Albums} />
				<Route exact path="/cities" component={Cities} />
				<Route exact path="/about" component={About} />

			</Switch>
		)
	}
}

export default Router;

//				<Route exact path="/" component={Something}/>
