console.log(arrowTitle);

/* findFirstNonIterativedCharacter */

/*  
Given an arbitrary input string, return the first Non Iteratived character. For strings with all repeats, return 'sorry'
*/

const findFirstNonIterativedCharacter = (str) => {
	const obj = {};
	for (let i = 0; i < str.length; i++) {
		if (!obj[str[i]]) {
			obj[str[i]] = 1;
		} else {
			obj[str[i]] = obj[str[i]] + 1;
		}
	}
	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]] === 1) return str[i];
	}

	return 'sorry';

  // or use index of and split
};

/*
Examples:
findFirstNonIterativedCharacter('ABCDBIRDUP') // => 'A'
findFirstNonIterativedCharacter('ALABAMA') // => 'L'
findFirstNonIterativedCharacter('Uber for horses') // => 'U'
findFirstNonIterativedCharacter('Hey heba baby ') // => 'sorry'
findFirstNonIterativedCharacter('good dog') // => 'sorry'

*/
