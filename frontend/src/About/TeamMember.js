import React, { Component } from 'react';



class TeamMember extends Component {

	render() {
		return(
			<div className="team-member-card card-shadows">
				<img className="rounded-circle" src={this.props.member.image} alt={this.props.member.name} height="140" />
				<h2>{this.props.member.name}</h2>
				{this.props.member.bio}				
				<div className="statistics">Number of Commits: <span id="commits-chia">{this.props.member.commits}</span><br />
										Number of Issues: <span id="issues-chia">{this.props.member.issues}</span><br />
										Number of Tests: <span id="tests-chia">{this.props.member.issues}</span>
				</div>						
			</div>
		);
	}
} 
export default TeamMember;