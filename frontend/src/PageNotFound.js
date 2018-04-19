import React, { Component } from 'react';

/*
Inject this page in between the Navitation and Footer Elements:
<Navigation activeTab={"songs"}/> 
<PageNotFound />
<Footer />
*/

class PageNotFound extends Component {

	render() {

		let modelCategory = this.props.category;
		let pageID = this.props.id;
		let errorMessage = "The page \"" + pageID + "\" does not exist for " + modelCategory;
		return(
			<div className="pageContent">
				<h2 className="pageNotFound">{errorMessage}</h2>
			</div>
		);
	}
} 
export default PageNotFound;