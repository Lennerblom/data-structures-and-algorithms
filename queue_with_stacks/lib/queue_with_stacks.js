'use strict';

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(thing) {
    this[this.length++] = thing;
    this.top = thing;
    return this.length;
  }
  pop() {
    let lastThing = this[this.length -1];
    if(this.length === 0) {
      return undefined;
    } else {
      delete (this[this.length -1]);
      this.length --;
      this.top = this[this.length -1];
      return lastThing;
    }
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}
  
class Queue {
      
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if(!this.head) { 
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length ++;
    return node;
  }

  dequeue() {
    let dq = this.head;
    this.head = this.head.next;
    this.length --;
    return dq;
  }
}
export default Queue;
