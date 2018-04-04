/*
Import this with something like:
import URL from '../URLSpaceUnderscore';

Examples of use: 
URL.toString("The_Name_or_title_of_something") returns "The Name or title of something"
URL.toUrl("The Name or title of something") returns "The_Name_or_title_of_something"
*/
class URLSpaceUnderscore {

	static toString(url) {
		return URLSpaceUnderscore.convert(url, '_', ' ');
	}

	static toUrl(string) {
		return URLSpaceUnderscore.convert(string, ' ', '_');
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
		// else if (pageNumber > totalPages)
		// 	return totalPages;
		else return pageNumber;


	}

	static capitalizeWords(words) {
		var index = 0; 
		var result="";
		var afterSpace = false;
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

	static getSortItem() {

	}

	static getSortDirection() {

	}

	static getFilters() {

	}

	static getPage() {
		
	}

	
} 
export default URLSpaceUnderscore;