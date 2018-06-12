'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
    
  constructor(val) {
    this.head = null;
    this.value = val;
    this.next = null;
  }

  append(val) {
    let node = new Node(val);
    console.log(val);
    if(this.head === null) {
      this.head = new Node(val);
    } else {
      node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(val);
    }
    return node.next;
  }

  insertBefore(val, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    if(this.head.value === val){
      this.head = node;
      this.head.next = current;
      return;
    }
    while(current.next) {
      if(current.next.value === val) {
        //node.next = current.next;
        break;
      }else {
        current = current.next;
      }
    }
    node.next = current;
    console.log(current);
    current.next = node;
    return this;
  }
  insertAfter(val, newVal) {
    let node = new Node(newVal);
    let current = this.head;

    while(current){
      if(current.value === val){
        node = current.next;
        current.next = node;
        break;
      }

      current = current.next;
    }
    return current;
  }

}
    
//const myLinkedList = new LinkedList;

module.exports = LinkedList;
//module.exports = Node;