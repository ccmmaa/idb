import React, { Component } from 'react';
import URL from '../URLHelperFunctions';
import $ from 'jquery';
import Loading from '../assets/images/loading.gif';
import '../assets/css/concertComponent.css';
import FilterHelper from '../FilterHelper';

class Concert extends Component {

	constructor() {
		super();
		this.state = {
			artistName: "Artist",
			artistImage: Loading
		}
	}

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/artist/' + this.props.concert.artist_id,
			dataType: 'json',
			cache: true,
			success: function(data) {
				console.log("Dump" + data.image);
				this.setState({"artistName": data.name, "artistImage": data.image});
			}.bind(this),
			error: function(xhr, status, error) {
				console.log(xhr);
			}
		});
	}

	render() {
		let date = this.props.concert.time.substring(0, this.props.concert.time.indexOf('T'));
		let firstDash = date.indexOf('-');
		let lastDash = date.lastIndexOf('-');
		let months = FilterHelper.monthsDict();
		let year = date.substring(0, firstDash);
		let month = date.substring(firstDash + 1, lastDash);
		let day = date.substring(lastDash + 1);
		let time = this.props.concert.time.substring(this.props.concert.time.indexOf('T') + 1);
		return(
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<img className="concert-img" src={this.state.artistImage} />
				<p className="concert-text">
					<a href={"/artists/" + this.props.concert.artist_id}>{this.state.artistName}</a>
					<br />	{months[month]} {day}, {year}
					<br />	{time} 
					<br />	{this.props.concert.venue}<br />	
					<a href={this.props.concert.tickets} target="_blank">
						<span className="badge badge-primary badge-pill">Buy Tickets</span>
					</a> 
				</p>	
			</li>
		);
	}
} 
export default Concert;