console.log(arrowTitle);

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

const SumOddNumber = (arr) => {
	let sum = 0;
	for (const value of arr) {
		if (value % 2 !== 0) sum += value;
	}
	return sum;
};

/*
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]  ) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
SumOddNumber([2, 4, 6,0 ]) // => 0
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([-2, 0, 4, -3, 5]) // => 2
SumOddNumber([]) // => 0


*/
