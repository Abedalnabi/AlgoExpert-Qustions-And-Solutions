/* ------------------------ Question-2-Array-Easy ------------------------

  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.
  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4] , 
  and so do the numbers [2, 4] .
  Note:
  that a single number in an array and the array itself are both valid
  subsequences of the array.

  ---- Sample input ----
  
  array = [5, 1, 22, 25, 6, -1, 8, 10]
  sequence = [1, 6, -1, 10] 
  
  ---- Sample output ----
  
  return ===> true

*/
/* ------------------------ Hints ------------------------

  -- Hint 1 
  You can solve this question by iterating through the main input array once.

  -- Hint 2 
  If you find that integer, keep on iterating through the main array, but now look 
  Iterate through the main array, and look for the first integer in the potential subsequence.
  Continue this process until you either find every integer in the potential subsequence 
  for the second integer in the potential subsequence. or you reach the end of the main array.

  -- Hint 3 
  To actually implement what Hint #2 describes, you'll have to declare a variable holding your position
  in the potential subsequence.
  At first, this position will be the 0th index in the sequence; as you find the sequence's integers in the main 
  array, you'll increment the position variable until you reach the end of the sequence.

/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

function FirstIsValidSubsequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;
  while (array.length > arrayIndex && sequence.length > sequenceIndex) {
    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
    arrayIndex++;
  }
  return sequenceIndex === sequence.length;
}

//  ---- Second solution ---- :

function SecondIsValidSubsequence(array, sequence) {
  let seqIndex = 0;
  for (const value of array) {
    if (seqIndex === sequence.length) break;
    if (sequence[seqIndex] === value) seqIndex++;
  }
  return seqIndex === sequence.length;
}
