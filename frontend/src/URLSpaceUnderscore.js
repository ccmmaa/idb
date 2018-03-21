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

	
} 
export default URLSpaceUnderscore;