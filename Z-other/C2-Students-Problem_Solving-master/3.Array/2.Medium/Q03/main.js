console.log(arrowTitle);

/* evenAppearance */

/*  
Find the first item which appear an even number of times in an array.
*/

const evenAppearance = (arr) => {
	for (const value of arr) {
		if (!(value % 2)) return value;
	}
};

/*
Examples:
evenAppearance([1,1,2,6,6]) // => 2
evenAppearance([1,2,2,9,8,8,6,6]) // => 2
evenAppearance([1,9,7,3,6,6,8,9,9]) // => 6
*/
