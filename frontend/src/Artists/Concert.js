import React, { Component } from 'react';
import $ from 'jquery';


class Concert extends Component {

	constructor() {
		super();
		this.state = {
			city: "",
			venue: ""
		}
	}

	componentWillMount() {
		$.ajax({
			url: 'http://api.musepy.me/city/' + this.props.cityId,
			dataType: 'json',
			cache: false,
			success: function(data) {
				var result = data.name;
				if (data.name == "n/a") {
					result = "";
				}
				this.setState({"location": result, "venue": this.props.venue});
			}.bind(this),
			error: function(xhr, status, error) {
				// console.log("Get ERROR: " + error);
			}
		});
	}

	render() {
		return(
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<p><a href={"/cities/" + this.props.cityId}>{this.state.city}</a> - {this.state.venue}</p>
				<span className="badge badge-primary badge-pill">{this.props.time}</span>
			</li>
		);
	}
} 
export default Concert;