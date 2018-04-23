class FilterHelper {

	static yearsDict() {
		return {
			"1973":1973, 
			"1976":1976, 
			"1979":1979, 
			"1980":1980, 
			"1982":1982, 
			"1983":1983, 
			"1987":1987, 
			"1994":1994, 
			"1997":1997, 
			"2000":2000, 
			"2002":2002, 
			"2004":2004, 
			"2005":2005, 
			"2006":2006, 
			"2007":2007, 
			"2008":2008, 
			"2009":2009, 
			"2010":2010, 
			"2011":2011, 
			"2012":2012, 
			"2013":2013, 
			"2014":2014, 
			"2015":2015, 
			"2016":2016, 
			"2017":2017, 
			"2018":2018
		};
	}
	
	static genresDict() {
		return {
			"Country": "country", 
			"Pop": "pop",
			"Trap": "trap", 
			"Other": "other", 
			"Hip Hop": "hip%20hop", 
			"Indie": "indie", 
			"Rap": "rap", 
			"Metal": "metal", 
			"Mexican": "mexican", 
			"Funk": "funk", 
			"Electronic": "electronic", 
			"Jazz": "jazz", 
			"Rock": "rock", 
			"Latin": "latin"
		};
	}

	static statesDict() {
		return {
			Arizona: "Arizona", 
			California: "California", 
			Colorado: "Colorado", 
			Florida: "Florida",
			Georgia: "Georgia", 
			Illinois: "Illinois", 
			Indiana: "Indiana", 
			Massachusetts: "Massachusetts", 
			Minnesota: "Minnesota", 
			"North Carolina": "North%20Carolina", 
			Ohio: "Ohio", 
			Oregon: "Oregon", 
			Pennsylvania: "Pennsylvania", 
			Tennessee: "Tennessee", 
			Texas: "Texas", 
			Washington: "Washington"
		};
	}

	static citiesDict() {
		return {
			"Atlanta":"Atlanta", 
			"Austin":"Austin", 
			"Boston":"Boston", 
			"Charlotte":"Charlotte", 
			"Chicago":"Chicago", 
			"Columbus":"Columbus", 
			"Dallas":"Dallas", 
			"Denver":"Denver", 
			"Houston":"Houston", 
			"Indianapolis":"Indianapolis", 
			"Jacksonville":"Jacksonville", 
			"Los Angeles":"Los%20Angeles", 
			"Memphis":"Memphis", 
			"Miami":"Miami", 
			"Minneapolis":"Minneapolis", 
			"Oakland":"Oakland", 
			"Philadelphia":"Philadelphia", 
			"Phoenix":"Phoenix", 
			"Portland":"Portland", 
			"San Antonio":"San%20Antonio", 
			"San Diego":"San%20Diego", 
			"Seattle":"Seattle"
		};
	}

	static validYears() {
		return this.valuesOfDictionary(this.yearsDict());
	}

	static validGenres() {
		return this.valuesOfDictionary(this.genresDict());
	}

	static validStates() {
		return this.valuesOfDictionary(this.statesDict());
	}

	static validCities() {
		return this.valuesOfDictionary(this.citiesDict());
	}

	static valuesOfDictionary(dictionary) {
		var result = [];
		for (var key in dictionary) {
			result.push(dictionary[key]);
		}
		return result;

	}

	static monthsDict() {
		return {
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
		};
	}	
} 
export default FilterHelper;