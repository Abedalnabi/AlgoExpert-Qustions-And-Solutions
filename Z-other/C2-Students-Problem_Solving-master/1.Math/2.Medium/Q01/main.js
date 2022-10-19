console.log(arrowTitle);

/* Is Power Of Two */

/*  
Write a function  returns YES if a number is a power of 2, and NO if not.
*/

const isPowerOfTwo = (num) => {
	return num % 2 === 0 ? 'Yes' : 'No';
};

/*
Examples:
isPowerOfTwo(0) // => 'NO'
isPowerOfTwo(1) // => 'YES'
// I am sure not a typo 1 => YES

isPowerOfTwo(2) // => 'YES'
isPowerOfTwo(4) // => 'YES'
isPowerOfTwo(6) // => 'NO'
isPowerOfTwo(11) // => 'NO'
isPowerOfTwo(16) // => 'YES'
isPowerOfTwo(18) // => 'NO'
isPowerOfTwo(24) // => 'NO'
isPowerOfTwo(25) // => 'NO'
isPowerOfTwo(28) // => 'NO'
isPowerOfTwo(32) // => 'YES'
isPowerOfTwo(63) // => 'NO'
isPowerOfTwo(64) // => 'YES'
isPowerOfTwo(1023) // => 'NO'
isPowerOfTwo(1024) // => 'YES'
*/
