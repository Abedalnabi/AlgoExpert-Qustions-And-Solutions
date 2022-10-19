console.log(arrowTitle);

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

const firstReverse = (str) => {
	let array = [];
	for (let index = str.length - 1; index >= 0; index--) {
		array.push(str[index]);
	}
  return array
};

/*
Examples:
firstReverse('I Love Code'); // => 'edoC evoL I'
firstReverse('Hello World'); // => 'dlroW olleH'
firstReverse('How are you?'); // => '?uoy era woH'
firstReverse(''); // => ''

*/
