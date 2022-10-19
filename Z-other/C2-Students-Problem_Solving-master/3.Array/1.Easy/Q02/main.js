console.log(arrowTitle);

/* ArrayCenter */

/*  
have an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

const ArrayCenter = (arr) => {
	const length = arr.length;
	if (length % 2) return arr[Math.floor(length / 2)];

	const firstItem = arr[length / 2];
	const secondItem = arr[length / 2 - 1];

	return (firstItem + secondItem) / 2;
};

/*
Examples:
ArrayCenter([2,5,1]) // => 5
ArrayCenter([2,3,2,9,2]) // => 2
ArrayCenter([2,3]) // => 2.5
ArrayCenter([]) // => 'empty Array'
ArrayCenter([2,3,-4,6,1,5]) // => 1
ArrayCenter([2,3,4,-6,2]) // => 1


*/
