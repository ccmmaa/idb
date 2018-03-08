import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About/About';
// import Something from './Somewhere'

class Router extends Component {
	render() {
		return(
			<Switch>
				<Route path="/" component={About}/>
				<Route path="/songs" component={About}/>
				<Route path="/about" component={About}/>

			</Switch>
		)
	}
}

export default Router;

//				<Route exact path="/" component={Something}/>
