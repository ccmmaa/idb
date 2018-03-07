import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Something from './Somewhere'

export default class DefaultRouter extends Component {
	render() {
		return(
			<Switch>
				<Route exact path="/" component={Something}/>
			</Switch>
		)
	}
}