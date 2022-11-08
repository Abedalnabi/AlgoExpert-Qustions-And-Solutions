/* ------------------------ Question-2-Recursion-Easy ------------------------

Selection Sort
Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm to sort the array.
If you're unfamiliar with Selection Sort, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.
Sample Input
array = [8, 5, 2, 9, 5, 6, 3]
Sample Output
[2, 3, 5, 5, 6, 8, 9]
Hints
Hint 1
Divide the input array into two subarrays in place. The first subarray should be sorted at all times and should start with a length of 0, while the second subarray should be unsorted. Find the smallest (or largest) element in the unsorted subarray and insert it into the sorted subarray with a swap. Repeat this process of
finding the smallest (or largest) element in the unsorted subarray and inserting it in its correct position in the sorted subarray with a swap until the entire array is sorted.
Optimal Space & Time Complexity
Best: O(n^2) time | O(1) space - where n is the length of the input array Average: O(n^2) time | O(1) space - where n is the length of the input array Worst: O(n^2) time | O(1) space - where n is the length of the input array

/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let smallestIdx = i;
		let smallestValue = array[i];
		for (let x = i + 1; x < array.length; x++) {
			let currentValue = array[x];
			if (currentValue < smallestValue) {
				smallestIdx = x;
			}
		}
		swap(array, smallestIdx, i);
	}
	return array;
}

function swap(array, i, x) {
	let swap = array[i];
	array[i] = array[x];
	array[x] = swap;
}

insertionSort([8, 5, 2, 9, 5, 6, 3]);
