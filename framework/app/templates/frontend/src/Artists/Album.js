import React, { Component } from 'react';



class Album extends Component {

	render() {
		return(
			<div className="col-lg-2">
				<div className="ingrid" text-align="center">
					<img className="rounded-0" src={this.props.albumArt} alt="Album Art" width="100%" height="100%" />
					<h4><a href={"/albums/" + this.props.albumID}>{this.props.albumName}</a></h4>
				</div>
			</div>
		);
	}
} 
export default Album;