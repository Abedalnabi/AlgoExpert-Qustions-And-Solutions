console.log(arrowTitle);

/* MaximumProductOfThree */

/*  
Write a function accepts an array of integers and returns the Maximum product possible from three of those numbers.
*/

const MaximumProductOfThree = (arr) => {
	// O(n log n)
	sortedArr = arr.sort((a, b) => a - b);
	let len = arr.length;
	let maxProduct = sortedArr[len - 1] * sortedArr[len - 2] * sortedArr[len - 3];
	return maxProduct;
};

const MaximumProductOfThree_2 = (arr) => {
	let highest = Math.max(arr[0], arr[1]);
	let lowest = Math.min(arr[0], arr[1]);
	let highestProductOf2 = arr[0] * arr[1];
	let lowestProductOf2 = arr[0] * arr[1];
	let highestProductOf3 = arr[0] * arr[1] * arr[2];

	for (let i = 2; i < arr.length; i++) {
		let current = arr[i];

		highestProductOf3 = Math.max(
			highestProductOf3,
			current * highestProductOf2,
			current * lowestProductOf2
		);

		highestProductOf2 = Math.max(highestProductOf2, current * highest, current * lowest);

		lowestProductOf2 = Math.min(lowestProductOf2, current * highest, current * lowest);

		highest = Math.max(highest, current);

		lowest = Math.min(lowest, current);
	}

	return highestProductOf3;
};
/*
Examples:
MaximumProductOfThree([3, 1, 3, 7]) // => 63
MaximumProductOfThree([0, 2, 3]) // => 0
MaximumProductOfThree([2, 3, 5]) // => 30
MaximumProductOfThree([10, 4, 5]) // => 200
MaximumProductOfThree([7, 0, 5]) // => 0

*/
