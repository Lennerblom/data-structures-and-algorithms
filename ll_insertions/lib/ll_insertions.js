'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
    
  constructor(val) {
    this.head = null;
    this.value = val;
    this.next = null;
  }

  append(val){
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
        break;
      }else {
        current = current.next;
      }
    }
    node.next = current.next;
    current.next = node;
  }

  insertAfter(val, newVal) {
    let node = new Node(newVal);
    let current = this.head;

    while(current){
      console.log(current.value);
      if(current.value === val){
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
  }

}

module.exports = LinkedList;
