/* ------------------------ Question-2-String-Easy ------------------------

  Given a non-empty string of lowercase letters and a non-negative integer
  representing a key, write a function that returns a new string obtained by
  shifting every letter in the input string by k positions in the alphabet,
  where k is the key.
  Note that letters should "wrap" around the alphabet; in other words, the
  letter z  shifted by one returns the letter a

  ---- Sample input ----
  
  string = "xyz"
  
  ---- Sample output ----
  
  ===> "zab"

*/
/* ------------------------ Hints ------------------------

  -- Hint 1 
Most languages have built-in functions that give you the Unicode value of a character as well as 
the character corresponding to a Unicode value. Consider using such functions to determine which letters
the input string's letters should be mapped to.

  -- Hint 2 
Try creating your own mapping of letters to codes. In other words, try associating each letter in 
the alphabet with a specific number - its position in the alphabet, for instance - and using that to determine 
which letters the input string's letters should be mapped to

  -- Hint 3 

How do you handle cases where a letter gets shifted to a position that requires wrapping around the alphabet? 
What about cases where the key is very large and causes multiple wrappings around the alphabet? The modulo 
operator should be your friend here.

/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

function caesarCipherEncryptor(string, key) {
	const newLetters = [];
	const newKey = key % 26;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';

	for (const letter of string) {
		const newLetter = getLetter(letter, alphabet, newKey);
		newLetters.push(newLetter);
	}
	return newLetters.join('');
}
function getLetter(letter, array, key) {
	const letterIdx = array.indexOf(letter) + key;

	return array[letterIdx % 26];
}

//  ---- Second solution ---- :
// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
	const newLetters = [];
	const newKey = key % 26;
	for (const letter of string) {
		newLetters.push(getNewLetter(letter, newKey));
	}
	return newLetters.join('');
}
function getNewLetter(letter, key) {
	const newLetterCode = letter.charCodeAt() + key;
	return newLetterCode <= 122
		? String.fromCharCode(newLetterCode)
		: String.fromCharCode(96 + (newLetterCode % 122));
}
//  ---- Third solution ---- :

function caesarCipherEncryptor(string, key) {
	return string
		.split('')
		.map((_, i) => {
			const asciCode = string.charCodeAt(i) + (key % 26);
			return String.fromCharCode(asciCode > 122 ? asciCode - 26 : asciCode);
		})
		.join('');
}
