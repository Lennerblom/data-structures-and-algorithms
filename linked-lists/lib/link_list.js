'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
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
    
  prepend(val) {
    let node = new Node(val);
    if(this.head === null) {
      this.head = node;
    } else {
      node.next = this.head ;
      this.head = node;
      this.head.previous = node;
      node = this.head;
    }
    return this.head;
  }

  reverse(LinkedList) {
    let node = LinkedList;
    let previous = null;
    while(node){
      let save = node.next;
      node.next = previous;
      previous = node;
      node = save;
    }
    return previous;
  }
  remove(offset) {
    if(!this.head) {return null;}
    if(this.head === offset){
      this.head = null;
      return this;
    }
    let previous = this.head;
    let current = previous.next;
    while(current) {
      if(current.val === offset) {
        break;
      }
      previous = current;
      current = current.next;
    }
  }
  serialize() {
    let str = '';
    let node = this.head;
    while(node) {
      str += '[' + node.value + '] ->';
      node = node.next;
    }
    str += '[X]';

    return str;

  }
}

module.exports = LinkedList;
