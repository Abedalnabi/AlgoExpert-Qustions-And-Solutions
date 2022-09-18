/* ------------------------ Question-1-Array-Easy ------------------------

  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.
  You can assume that there will be at most one pair of numbers summing up to
  the target sum.
  
  ---- Sample input ----
  
  array = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum = 10 
  
  ---- Sample output ----
  
  return ===> [11,-1]

*/
/* ------------------------ Hints ------------------------

  -- Hint 1 (for first solution)
  Try using two for loops to sum all possible pairs of numbers in the input array.
  What are the time and space implications of this approach?

  -- Hint 2 (for second solution)
  Realize that for every number X in the input array, you are essentially trying to find 
  a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, 
  it shouldn't be hard to solve for Y.

  -- Hint 3 (for third solution)
  Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, 
  and checking if the Y that you find is stored in the hash table. 
  What are the time and space implications of this approach?

/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

function FirstTwoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let x = i; x < array.length; x++) {
      if (array[i] + array[x] === targetSum && x != i) {
        return [array[i], array[x]];
      }
    }
  }
  return [];
}

//  ---- Second solution ---- :

function SecondTwoNumberSum(array, targetSum) {
  const obj = {};
  for (const value of array) {
    const target = targetSum - value;
    if (obj.hasOwnProperty(target)) {
      // or (obj in target)
      return [target, value];
    } else {
      obj[value] = value;
    }
  }
  return [];
}

//  ---- Third solution ---- :

function ThirdTwoNumberSum(array, targetSum) {
  array.sort((first, second) => first - second);
  let right = array.length - 1;
  let left = 0;
  while (left < right) {
    const currentValue = array[left] + array[right];
    if (currentValue === targetSum) return [array[left], array[right]];
    if (currentValue < targetSum) {
      left++;
      continue;
    }
    right--;
  }
  return [];
}
