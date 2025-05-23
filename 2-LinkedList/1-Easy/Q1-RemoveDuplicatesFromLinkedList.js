/* ------------------------ Question-1-LinkedList-Easy ------------------------

Remove Duplicates From Linked List
You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. 
Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. 
The Linked List should be modified in place (i.e., you shouldn't create a brand new list), and the modified
Linked List should still have its nodes sorted with respect to their values.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / 
null if it's the tail of the list.

Sample Input

linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 // the head node with value 1

Sample Output

1 -> 3 -> 4 -> 5 -> 6 // the head node with value 1



Hint 1
The brute-force approach to this problem is to use a hash table or a set to keep track of all node values that exist
while traversing the linked list and to simply remove nodes that have a value that already exists. This approach works, 
but can you solve this problem without using an auxiliary data structure?

Hint 2
What does the fact that the nodes are sorted tell you about the location of all duplicate nodes? How can you use this fact
to solve this problem with constant space?

Hint 3
Since the linked list's nodes are sorted, you can loop through them and, at each iteration, simply remove all successive 
nodes that have the same value as the current node. For each node, change its next pointer to the next node in the linked
list that has a different value. This will remove all duplicate-value nodes

*/
/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// O(n) time | O(1) space - where n is the number of nodes in the Linked List
function removeDuplicatesFromLinkedList(linkedList) {
	let currentNode = linkedList;

	while (currentNode.next) {
		if (currentNode.value === currentNode.next.value) {
			currentNode.next = currentNode.next.next;
		} else {
			currentNode = currentNode.next;
		}
	}

	return linkedList;
}

console.log(
	'removeDuplicatesFromLinkedList',
	removeDuplicatesFromLinkedList({
		linkedList: {
			head: '1',
			nodes: [
				{ id: '1', next: '1-2', value: 1 },
				{ id: '1-2', next: '1-3', value: 1 },
				{ id: '1-3', next: '2', value: 1 },
				{ id: '2', next: '3', value: 3 },
				{ id: '3', next: '3-2', value: 4 },
				{ id: '3-2', next: '3-3', value: 4 },
				{ id: '3-3', next: '4', value: 4 },
				{ id: '4', next: '5', value: 5 },
				{ id: '5', next: '5-2', value: 6 },
				{ id: '5-2', next: null, value: 6 },
			],
		},
	})
);

