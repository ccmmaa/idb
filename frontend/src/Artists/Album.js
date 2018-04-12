import React, { Component } from 'react';
import $ from 'jquery';
import URL from '../URLHelperFunctions';




class Album extends Component {

	constructor() {
		super();
		this.state = {
			itunesUrl: "https://www.apple.com/itunes/charts/songs/"
		};
	}

	componentWillMount() {
		this.getiTunesUrl(URL.convert(this.props.albumName + " " + this.props.artist, " ", "+"));
		// alert(URL.convert(this.props.albumName + this.props.artist, " ", "+"));
	}

	getiTunesUrl(searchTerm) {
		$.ajax({
			url: "https://itunes.apple.com/search?term=" + searchTerm + "&limit=1",
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data);
				if (data.resultCount === 0) {
					this.setState({itunesUrl: "https://www.apple.com/itunes/charts/songs/"});
				} else {
					this.setState({itunesUrl: data.results[0].trackViewUrl});
				}
			}.bind(this),
			error: function(xhr, status, error) {
				console.log("error");
				
			}
		});
	}

	render() {
		return(
			<div className="col-lg-2">
				<div className="ingrid" text-align="center">
					<img className="rounded-0" src={this.props.albumArt} alt="Album Art" width="100%" height="100%" />
					<h4><a href={"/albums/" + this.props.albumId}>{this.props.albumName}</a></h4>
				</div>
				<center><a href={this.state.itunesUrl} target="_blank"><span className="badge badge-primary badge-pill">Buy</span></a></center>
			</div>
		);
	}
} 
export default Album;