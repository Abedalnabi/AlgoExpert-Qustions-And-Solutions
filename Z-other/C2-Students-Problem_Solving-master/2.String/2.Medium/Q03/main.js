console.log(arrowTitle);

/* Reverse Each Word */

/*  
Write a function reverses the characters of every word of a sentence. sentences contain only English letter and space characters.
*/

const reverseEachWord = (str) => {
	let mainArray = [];
	let tempArray = [];
	for (let index = str.length - 1; index >= 0; index--) {
		if (str[index] === ' ' || index === 0) {
			mainArray.unshift(...tempArray);
			mainArray.unshift(' ');
			tempArray = [];
		} else {
			tempArray.push(str[index]);
		}
	}
	return mainArray.join('');
};

/* 
Examples:
reverseEachWord("Hello world") // => "olleh dlrow"
reverseEachWord("Hello guys") // => "olleh syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
