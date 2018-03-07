import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About/About';
// import Something from './Somewhere'

class Router extends Component {
	render() {
		return(
			<Router>
			<Switch>
				<Route path="/about" component={About}/>

			</Switch>
			</Router>
		)
	}
}

export default Router;

//				<Route exact path="/" component={Something}/>
