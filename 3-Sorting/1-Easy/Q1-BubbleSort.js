/* ------------------------ Question-2-Recursion-Easy ------------------------

Write a function that takes in an array of integers and returns a sorted version of
that array. Use the Bubble Sort algorithm to sort the array.
If you're unfamiliar with Bubble Sort, we recommend watching the Conceptual
Overview section of this question's video explanation before starting to code.

  ---- Sample input #1 ----
  
  array = [8, 5, 2, 9, 5, 6, 3]
  ---- Sample output #1 ----
  
  ===> [2, 3, 5, 5, 6, 8, 9]

  
*/
/* ------------------------ Hints ------------------------

  -- Hint 1 

Traverse the input array, swapping any two numbers that are out of order
and keeping track of any swaps that you make. Once you arrive at the end of
the array, check if you have made any swaps; if not, the array is sorted and
you are done; otherwise, repeat the steps laid out in this hint until the array is
sorted.


/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

function bubbleSort(array) {
	let isThereASwap = true;
	let counter = 0;
	while (isThereASwap) {
		isThereASwap = false;
		for (let i = 0; i < array.length - 1 - counter; i++) {
			if (array[i] > array[i + 1]) {
				isThereASwap = true;
				swap(array, i, i + 1);
			}
		}
		counter++;
	}
	console.log('array', array);
	return array;
}

function swap(array, i, x) {
	let swap = array[i];
	array[i] = array[x];
	array[x] = swap;
}
