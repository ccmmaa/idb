/*
Import this with something like:
import URL from '../URLHelperFunctions';

Examples of use: 
URL.toString("The_Name_or_title_of_something") returns "The Name or title of something"
URL.toUrl("The Name or title of something") returns "The_Name_or_title_of_something"
*/
import FilterHelper from './FilterHelper';

class URLHelperFunctions {

	static toString(url) {
		return this.convert(url, '_', ' ');
	}

	static toUrl(string) {
		return this.convert(string, ' ', '_');
	}

	static lastUrlItem(itemNumber) {
		var result = window.location.href;
		var indexOfDash = result.lastIndexOf("-");
		if (itemNumber === 0) {
			if (indexOfDash === -1)
				indexOfDash = result.length;
			return result.substring(result.lastIndexOf("/")+1, indexOfDash);
		}
		else if (itemNumber === 1 && indexOfDash !== -1)
			return result.substring(result.lastIndexOf("-")+1);	
		return result.substring(result.lastIndexOf("/")+1);
	}

	static lastItem(item) {
		var result = item;
		return result.substring(result.lastIndexOf("/")+1);
	}

	//Helper method. Use the other two methods instead
	static convert(input, take, convert) {
		console.log("URL Convert Test");
		console.log("Input = " + input);
		var result = "";
		for ( let character of input) {
			if (character === take) {
				result+=convert;
			}
			else {
				result+=character;
			}
		}
		console.log("Output = " + result);
		return result;
	}

	static urlPageNumber(totalPages) {
		let url = window.location.href;
		let indexOfP = url.lastIndexOf("?p=");
		if (indexOfP == -1)
			return 1;
		let pageNumber = url.substring(indexOfP + 3);
		if (pageNumber < 1)
			return 1;
		else return pageNumber;
	}

	static capitalizeWords(words) {
		var index = 0; 
		var result="";
		var afterSpace = false;
		if (words != undefined)
		for (;index < words.length; index++) {
			if (index === 0)
				result += words.charAt(index).toUpperCase();
			else if (words.charAt(index) === " ") {
				afterSpace = true;
				result += words.charAt(index);
			}
			else if (afterSpace) {
				result += words.charAt(index).toUpperCase();
				afterSpace = false;
			}
			else {
				result += words.charAt(index);
			}
		}
		return result;
	}

	static queryString() {
		var result = "";
		let Url = window.location.href;
		if (Url.includes("?")) {
			let queryString = Url.substring(Url.indexOf("?") + 1,Url.length);
			result = queryString;
		}
		return result;
	}

	static test() {
		alert(this.getSortItem("default") + "\n"+
			this.getSortDirection(true) + "\n" + 
			"[" + this.getFilters([]) + "]" + "\n" + 
			this.getPage(1));
	}

	static getSearchQuery() {
		var result = "";
		let paramName = "q=";
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName)) {
					let entry = param.substring(paramName.length);
					result = entry;
				}
			}
		} catch(err) {}
		return result;
	}

	static getSortItem(standard, options) {
		var result = standard;
		let paramName = "sort=";
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName)) {
					let entry = param.substring(paramName.length);
					if (options.includes(entry))
					result = entry;
				}
			}
		} catch(err) {}
		return result;
	}

	static getSortDirection(standard) {
		var result = standard;
		let paramName = "dir=";
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName)) {
					let entry = param.substring(paramName.length);
					if (entry=="asc" || entry=="desc")
					result = entry=="asc";
					console.log(result);
				}
			}
		} catch(err){}
		return result;
	}

	static getFilters(standard, options) {
		var result = standard;
		let paramName = "filters=";
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName)) {
					let entry = param.substring(paramName.length+1, param.length-1);
					result = [];
					let filters = (entry.split(","));
					for (var filter of filters) {
						if (options.includes(filter)){
							result.push(filter);
						}
					}	
				}
			}
		} catch (err){}	
		return result;
	}

	static getGenres(standard) {
		let options = FilterHelper.validGenres();
		var result = standard;
		let paramName = "genres=";
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName)) {
					let entry = param.substring(paramName.length+1, param.length-1);
					result = [];
					let filters = (entry.split(","));
					for (var filter of filters) {
						if (options.includes(filter)){
							result.push(filter);
						}
					}	
				}
			}
		} catch (err){}	
		return result;
	}

	static getFiltersInt(standard, options) {
		var result = standard;
		let paramName = "filters=";
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName)) {
					let entry = param.substring(paramName.length+1, param.length-1);
					result = [];
					let filters = (entry.split(","));
					for (var filter of filters) {
						let intFilter = parseInt(filter);
						if (options.includes(intFilter)){
							result.push(intFilter);
						}
					}	
				}
			}
		} catch (err){}	
		return result;
	}

	static getPage(standard) {
		var result = standard;
		let paramName = "p=";
		let qs = this.queryString().split("&");
		for (var param of qs) {
			if (param.includes(paramName)) {
				result = param.substring(paramName.length);

			}
		}
		return parseInt(result);
	}

	static encodeSortFilter(state, defSort) {
		var edited = false;
		var result = "?";
		if (state.sort!=defSort) {
			edited = true;
			result += "sort=" + state.sort + "&";
		} 
		if (!state.order) {
			edited = true;
			result += "dir=" + "desc" + "&";
		}
		if (state.filters != undefined && state.filters.length>0) {
			edited = true;
			result += "filters=[" + state.filters + "]" + "&";
		}
		if (state.genres != undefined && state.genres.length>0) {
			edited = true;
			result += "genres=[" + state.genres + "]" + "&";
		}
		if (state.page != 1) {
			edited = true;
			result += "p=" + state.page + "&";
		}
		if (edited)
			return result.substring(0, result.length-1);
		else return "";

	}

	
} 
export default URLHelperFunctions;