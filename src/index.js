module.exports = function toReadable (number) {

	let digitsPos = Array.from(number.toString()),
		
		ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"], 

		teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],

		decimals = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],

		prefixes = ['hundred', 'thousand', 'million', 'billion'];		
		
	if(number == 0) {

		return "zero";

	} else if(number < 10) {
			
		return `${ones[number]}`;

	} else if (number >= 10 && number < 20) {
			
		return `${teens[digitsPos[1]]}`;

	} else if (number >= 10 && number < 100) {

		if(+digitsPos[1] == 0) {
				
			return `${decimals[+digitsPos[0]-1]}`;

		} else {
			
			return `${decimals[+digitsPos[0]-1]} ${ones[+digitsPos[1]]}`;

			}

	} else if (number >= 100 && number < 1000) {

		if(+digitsPos[1] == 0 && +digitsPos[2] == 0) {
				
			return `${ones[+digitsPos[0]]} ${prefixes[0]}`;

		} else if(+digitsPos[1] == 0) {
				
			return `${ones[+digitsPos[0]]} ${prefixes[0]} ${ones[+digitsPos[2]]}`;

		} else if(+digitsPos[1] == 1) {
			
			return `${ones[+digitsPos[0]]} ${prefixes[0]} ${teens[+digitsPos[2]]}`;				

		} else if(+digitsPos[1] != 0 && +digitsPos[2] == 0) {
				
			return `${ones[+digitsPos[0]]} ${prefixes[0]} ${decimals[+digitsPos[1]-1]}`;

		} else if(+digitsPos[1] != 0 && +digitsPos[2] != 0) {
				
			return `${ones[+digitsPos[0]]} ${prefixes[0]} ${decimals[+digitsPos[1]-1]} ${ones[+digitsPos[2]]}`;								

		} 

	}	
    
}
