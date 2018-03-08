import React, { Component } from 'react';
import {a} from 'react-router-dom';
// import {LinkContainer} from 'react-router-bootstrap';

class NavTabItem extends Component {

	render() {
		let classes="nav-link ";
		if (this.props.tab.id === this.props.activeTab) {
			classes += "active";
		}
		let link = <a className={classes} id={this.props.tab.id} href={this.props.tab.href} target="_parent">{this.props.tab.text}</a>
		return(
			<li className="nav-item">
				{link}
			</li>
		);
	}
}
export default NavTabItem;

/*
				<LinkContainer to={this.props.tab.href}><a>{this.props.tab.text}</a></LinkContainer>

*/