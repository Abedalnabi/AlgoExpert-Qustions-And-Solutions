/* ------------------------ Question-5-Array-Essay ------------------------

  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
  - For example, if you're given coins = [1, 2, 5] , the minimum amount of change that you can't create is 4.
  If you're given no coins, the minimum amount of change that you can't create is 1

  ---- Sample input ----
  
  coins = [5, 7, 1, 1, 2, 3, 22]
  
  ---- Sample output ----
  
  ===> 20

*/
/* ------------------------ Hints ------------------------

  -- Hint 1 


  -- Hint 2 


  -- Hint 3 


/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;
  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
    currentChangeCreated += coin;
  }
  return currentChangeCreated + 1;
}

//  ---- Second solution ---- :

function nonConstructibleChange2(coins) {
  // Write your code here.
  return 1;
}
