console.log(arrowTitle);

/* Longest Sequence */

/*  
Write a function returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

const longestSequence = (arr) => {
	let longest = 0;
	let currentLongest = 0;
	for (const value of arr) {
		if (currentLongest > longest) longest = currentLongest;
		if (!value) currentLongest = 0;
		if (value) currentLongest++;
	}
	return Math.max(currentLongest, longest);
};

/*
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1,1, 0, 1, 1]) // => 5
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1,1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1,1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1,1, 1, 0, 1, 0, 1, 1]) // => 5
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]) // => 6
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/
