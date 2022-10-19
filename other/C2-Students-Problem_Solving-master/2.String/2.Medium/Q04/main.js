console.log(arrowTitle);

/*  jointCharacters*/

/*  
Write a function accepts two strings , and returns only the characters that are joint on both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

const jointCharacters = (str1, str2) => {
	let seen = new Set();
	let str = '';
	for (let i = 0; i < str1.length; i++) {
		seen.add(str1[i]);
	}
	for (let i = 0; i < str2.length; i++) {
		if (seen.has(str2[i]) && str2[i] !== ' ') str += str2[i];
	}
	console.log(str);
};

/* 
Examples:
jointCharacters('abcd', 'abcd') // => 'abcd'
jointCharacters('What is love lol?', "Baby don't hurt me lol") // => 'hatoel'
jointCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/
