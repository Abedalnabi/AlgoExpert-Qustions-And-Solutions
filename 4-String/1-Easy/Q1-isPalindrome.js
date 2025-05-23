/* ------------------------ Question-1-String-Easy ------------------------


  Write a function that takes in a non-empty string and that returns a boolean
  representing whether the string is a palindrome.
  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.

  ---- Sample input ----
  
  string = "abcdcba"
  
  ---- Sample output ----
  
  ===> true

*/
/* ------------------------ Hints ------------------------

  -- Hint 1 
Start by building the input string in reverse order and comparing this newly built string to the input string.
Can you do this without using string concatenations?

  -- Hint 2 
Can you optimize your algorithm by using recursion? What are the implications of recursion on an algorithm's 
space-time complexity analysis?

  -- Hint 3 
Go back to an iterative solution and try using pointers to solve this problem: start with a pointer 
at the first index of the string and a pointer at the final index of the string. What can you do from there?

/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

function FirstIsPalindrome(string) {
	// or split string to array to avoid string time complexity when add nex chr to the string
	// str += 'chr' ==> o(n)
	// arr += 'chr ===> o(1)
	let str = '';
	for (let i = string.length - 1; i >= 0; i--) {
		str += string[i];
	}
	return str === string;
}

//  ---- Second solution ---- :

function secondIsPalindrome(string, i = 0) {
	let lastChar = string.length - 1 - i;
	if (i >= lastChar) {
		return true;
	}

	return string[i] === string[lastChar] && secondIsPalindrome(string, i + 1);
}

//  ---- Third solution ---- :

function thirdIsPalindrome(string) {
	let begin = 0;
	let last = string.length - 1;
	// Or using Variable ==> let boolean = true;
	while (last > begin) {
		if (string[last] !== string[begin]) return false;
		// boolean = true;
		begin++;
		last--;
	}
	return true;
	// return boolean;
}
