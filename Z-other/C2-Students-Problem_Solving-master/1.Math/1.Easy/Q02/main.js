/*  findFactorial*/

/*  
Given an integer n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

const findFactorial = (num) => {
	if (num == 0) return 1;

	return num * findFactorial(num - 1);
};

/*
Examples:
findFactorial(1) // => 1
findFactorial(3) // => 6
findFactorial(4) // => 24
findFactorial(6) // => 720
findFactorial(11) // => 39916800
*/
