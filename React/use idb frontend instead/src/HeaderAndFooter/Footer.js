import React, { Component } from 'react';
import {a} from 'react-router-dom';


class Footer extends Component {
	
	render() {

		return(
			<div> 
				<footer className="container">
					<p>&copy; 2018 Requiem For Our Dreams &middot; <a href="https://github.com/ccmmaa/idb" target="_parent"> GitHub Repository </a> &middot; 
						<a href="https://requiemforourdreams.gitbooks.io/report/content/" target="_parent"> GitBook Report </a> </p>
				</footer>
				<br />
			</div>
		);
	}
} 
export default Footer;
