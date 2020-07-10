// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) {
      return null;
    }

    while (node) {
      if (!node.next) {
        return node;
      }

      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    let previousNode = this.head;
    let nextNode = this.head.next;

    if (!previousNode) {
      return null;
    }

    while (nextNode) {
      if (!nextNode.next) {
        previousNode.next = null;
      }
      previousNode = nextNode;
      nextNode = nextNode.next;
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};
