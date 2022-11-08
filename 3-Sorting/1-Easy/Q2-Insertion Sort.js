/* ------------------------ Question-2-Recursion-Easy ------------------------

Insertion Sort
Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.
If you're unfamiliar with Insertion Sort, we recommend watching the Conceptual Overview section of this question's video explanation 
before starting to code.

Sample Input

array = [8, 5, 2, 9, 5, 6, 3]

Sample Output

[2, 3, 5, 5, 6, 8, 9]

Hints

Hint 1
Divide the input array into two subarrays in place. The first subarray should be sorted at all times and should start with a length of 1, 
while the second subarray should be unsorted. Iterate through the unsorted subarray, inserting all of its elements into the sorted subarray 
in the correct position by swapping them into
place. Eventually, the entire array will be sorted.

Optimal Space & Time Complexity
Best: O(n) time | O(1) space - where n is the length of the input array Average: O(n^2) time | O(1) space - where n is the length of the input array Worst: O(n^2) time | O(1) space - where n is the length of the input array

/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

function insertionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let smallestIdx = i;
		let smallestValue = array[i];
		for (let x = i + 1; x < array.length; x++) {
			let currentValue = array[x];
			if (currentValue < smallestValue) {
				smallestIdx = x;
				smallestValue = currentValue;
			}
		}
		swap(array, smallestIdx, i);
	}
	console.log(array)
	return array;
}

function swap(array, i, x) {
	let swap = array[i];
	array[i] = array[x];
	array[x] = swap;
}

insertionSort([8, 5, 2, 9, 5, 6, 3]);
