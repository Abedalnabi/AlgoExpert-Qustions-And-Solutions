console.log(arrowTitle);

/* Longest Word */

/*  
write a function to return the largest word in the string
*/

const longestWord = (str) => {
	let array = str.split(' ');
	let longest = 0;
	let longest2 = '';

	array.forEach((element) => {
		if (element.length > longest) {
			longest = element.length;
			longest2 = element;
		}
	});
  return longest2;
};

/* 
Examples:
longestWord('time dog cat'); // => 'time'
longestWord('we love cats'); // => 'love'
longestWord('dogs and cats are cute'); => "dogs"
longestWord(''); // => 'it's empty string'


*/
