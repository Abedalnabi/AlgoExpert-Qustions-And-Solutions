/* ------------------------ Question-4-String-Easy ------------------------

You're given a string of available characters and a string representing a document that you need to generate. Write a
function that determines if you can generate the document using the available characters. If you can generate the document,
your function should return true ; otherwise, it should return false .

You're only able to generate the document if the frequency of unique characters in the characters string is greater than or
equal to the frequency of unique characters in the document string. For example, if you're given characters = "abcabc"
and document = "aabbccc" you cannot generate the document because you're missing one c .

The document that you need to create may contain any characters, including special characters, capital letters, numbers,
and spaces.

Note: you can always generate the empty string ( "" ).

  ---- Sample input ----
  
characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"
  
  ---- Sample output ----
  
  ===> true

*/
/* ------------------------ Hints ------------------------

  -- Hint 1 
There are multiple ways to the solve this problem, but not all approaches have an optimal time complexity. Is there
any way to solve this problem in better than O(m * (n + m)) or O(n * (n + m)) time, where n is the length of the characters
string and m is the length of the document string?

  -- Hint 2 
One of the simplest ways to solve this problem is to loop through the document string, one character at a time. At
every character, you can count how many times it occurs in the document string and in the characters string. 
If it occurs more times in the document string than in the characters string, then you cannot generate the document. 
What is the time complexity of this approach?

  -- Hint 3 
The approach discussed in Hint #2 runs in O(m * (n + m)) time. Can you use some external space to optimize 
this time complexity?

  -- Hint 4 
  You can solve this problem in O(n + m) time. To do so, you need to use a hash table. Start by counting all of the
characters in the characters string and storing these counts in a hash table. Then, loop through the document string, 
and check if each character is in the hash table and has a value greater than zero. If a character isn't in the
hash table or doesn't have a value greater than zero, then you cannot generate the document. If a character is in the
hash table and has a value greater than zero, then decrement its value in the hash table to indicate that you've "used" 
one of these available characters. If you make it through the entire document string without returning false , 
then you can generate the document.
/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

function firstGenerateDocument(characters, document) {
  let chr = characters.split("");
  let flag = true;
  for (let i = 0; i < document.length; i++) {
    let index = chr.indexOf(document[i]);
    if (index >= 0) {
      chr.splice(index, 1);
    } else {
      flag = false;
    }
  }
  return flag;
}

//  ---- Second solution ---- :

function secondGenerateDocument(characters, document) {
  for (const value of document) {
    let charactersCounter = countChar(value, characters);
    let documentCounter = countChar(value, document);

    if (documentCounter > charactersCounter) return false;
  }
  return true;
}
function countChar(character, target) {
  let countOfChar = 0;
  for (const value of target) {
    if (value === character) countOfChar++;
  }
  return countOfChar;
}

//  ---- third solution ---- :

function thirdGenerateDocument(characters, document) {
  // const alreadyCounted = {}
  const alreadyCounted = new Set();
  for (const char of document) {
    if (char in alreadyCounted) continue;
    // if( alreadyCounted.has(char)) continue;

    // -- countChar function from second solution -- //
    const charactersCounter = countChar(char, characters);
    const documentCounter = countChar(char, document);

    if (documentCounter > charactersCounter) return false;

    alreadyCounted.add(char);
    // alreadyCounted[char] = alreadyCounted[char]
  }
  return true;
}

//  ---- Forth solution ---- :

function forthGenerateDocument(characters, document) {
  const characterCounts = {};

  for (const char of characters)
    if (characterCounts[char]) characterCounts[char]++;
    else characterCounts[char] = 1;

  for (const char of document) {
    if (!characterCounts[char] || characterCounts[char === 0]) return false;
    characterCounts[char]--;
  }
  return true;
}
