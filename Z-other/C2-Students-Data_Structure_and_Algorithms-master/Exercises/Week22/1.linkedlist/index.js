// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	setHead(node) {
		if (!this.head) {
			this.head = node;
			return;
		}
		this.insertFirst(node);
	}

	insertFirst(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.setHead(newNode);
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.size = this.size + 1;
	}
	getSize() {
		return this.size;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		let node = this.head;
		while (node.next) node = node.next;

		return node;
	}

	clear() {
		this.head = null;
		this.size = 0;
	}

	removeFirst() {
		if (!this.head) return;
		this.head = this.head.next;
	}

	removeLast() {}
	insertLast() {}
	getAt() {}
	removeAt() {}
	insertAt() {}
	forEach;
	// for of Loop
}

export default { Node, LinkedList };
