/* ------------------------ Question-3-LinkedList-Med ------------------------

Sum of Linked Lists
You're given two Linked Lists of potentially unequal length. Each Linked List represents a non-negative integer, 
where each node in the Linked List is a digit of that integer, and the first node in each Linked List always represents the
least significant digit of the integer. Write a function that returns the head of a new Linked List that
represents the sum of the integers represented by the two input Linked Lists.
Each LinkedList node has an integer value as well as a next node pointing to the next node in the list
or to None / null if it's the tail of the list. The value of each LinkedList node is always in the range of 0 - 9 .
Note: your function must create and return a new Linked List, and you're not allowed to modify either of the input Linked Lists.

Sample Input

linkedListOne = 2 -> 4 -> 7 -> 1
linkedListTwo = 9 -> 4 -> 5

Sample Output

1 -> 9 -> 2 -> 2
// linkedListOne represents 1742
// linkedListTwo represents 549
// 1742 + 549 = 2291

	1742 + 
     549
  = 2291

Hints
Hint 1
If you can determine the integers that each individual Linked List represents, 
then all you need to do is add these integers and create a new Linked List that represents the summed value.

Hint 2
If you go with the approach mentioned in Hint #1, you'll need to break down the sum of the two Linked Lists' 
numbers into its individual digits. Once you know these digits, you can create a new Linked List using them. 
This approach is fine, but you can solve this problem more elegantly, with a single iteration through the
Linked Lists.

Hint 3
Is it necessary to know the entire numbers represented by both Linked Lists in order to calculate their sum? Think back to your 
elementary-school math class; how did you add two numbers together?

Hint 4
Since each Linked List's digits are ordered from least significant digit to most significant digit, you can simply loop through both Linked Lists, 
consider the digits with the same significance, and add these digits together while keeping track of any carry that comes out of the addition.
At each iteration, when you add the two Linked List digits, also add the carry from the previous iteration. 
Create a new Linked List node that stores the calculated value, 
and add that to your new Linked List. Keep iterating until you reach the end of both Linked Lists and have no remaining carry.

Optimal Space & Time Complexity
O(max(n, m)) time | O(max(n, m)) space - where n is the length of the first Linked List and m is the length of the second Linked List


*/

/* ------------------------ Solution ------------------------*/

class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// O(max(n, m)) time | O(max(n, m)) space - where n is the length of the
// first Linked List and m is the length of the second Linked List
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
	// This variable will store a dummy node whose .next
	// attribute will point to the head of our new LL.
	const newLinkedListHeadPointer = new LinkedList(0);
	let currentNode = newLinkedListHeadPointer;
	let carry = 0;
	let nodeOne = linkedListOne;
	let nodeTwo = linkedListTwo;
	while (!nodeOne || nodeTwo || carry) {
		const valueOne = nodeOne ? nodeOne.value : 0;
		const valueTwo = nodeTwo ? nodeTwo.value : 0;
		const sumOfValues = valueOne + valueTwo + carry;
		const newValue = sumOfValues % 10;
		const newNode = new LinkedList(newValue);
		currentNode.next = newNode;
		currentNode = newNode;
		carry = Math.floor(sumOfValues / 10);
		nodeOne = nodeOne ? nodeOne.next : null;
		nodeTwo = nodeTwo ? nodeTwo.next : null;
	}
	return newLinkedListHeadPointer.next;
}

// second solution
function getListValue(head) {
	let place = 1;
	let cur = head;
	let num = 0;
	while (cur) {
		num += cur.value * place;
		place *= 10;
		cur = cur.next;
	}
	return num;
}
function sumOfLinkedLists_2(linkedListOne, linkedListTwo) {
	let numOne = getListValue(linkedListOne);
	let numTwo = getListValue(linkedListTwo);
	let sumIntegers = [...(numOne + numTwo).toString()];
	let newList = new LinkedList(+sumIntegers.pop());
	let cur = newList;
	while (sumIntegers.length) {
		let next = new LinkedList(+sumIntegers.pop());
		cur.next = next;
		cur = next;
	}
	return newList;
}

/**
 * new list
 * current list
 * curry 0
 * nodeOne
 * nodeTow
 * while node one node tow carry
 * valueNode one
 * valueNode tow 
 * sum two node + curry 
 * create new node with firstOne value
 * set current.next = new one
 * current = newOne
 * get the curry value
 * nodeOne.next
 * nodeOne.next
 */