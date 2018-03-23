import React, { Component } from 'react';
import URL from '../URLSpaceUnderscore';
import $ from 'jquery';
import Loading from '../assets/images/loading.gif';
import '../assets/css/concertComponent.css';


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
			cache: false,
			success: function(data) {
				console.log("Dump" + data.image);
				this.setState({"artistName": data.name, "artistImage": data.image});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	render() {
		let date = this.props.concert.time.substring(0, this.props.concert.time.indexOf('T'));
		let firstDash = date.indexOf('-');
		let lastDash = date.lastIndexOf('-');
		let months = {
			"01": "Jan",
			"02": "Feb",
			"03": "Mar",
			"04": "Apr",
			"05": "May",
			"06": "Jun",
			"07": "Jul",
			"08": "Aug",
			"09": "Sep",
			"10": "Oct",
			"11": "Nov",
			"12": "Dec"
		}
		let year = date.substring(0, firstDash);
		let month = date.substring(firstDash + 1, lastDash);
		let day = date.substring(lastDash + 1);
		let time = this.props.concert.time.substring(this.props.concert.time.indexOf('T') + 1);
		return(
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<img className="concert-img" src={this.state.artistImage}/>
				<p className="concert-text">
					<a href={this.props.concert.artist_id}>{this.state.artistName}</a>
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