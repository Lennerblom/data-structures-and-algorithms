'use strict';

class LinkedList {
    
  constructor(data) {
    this.head = null;
    this.data = data;
    this.next = null;
  
  
    exports.append = (data) => {
      if(this.head === null) {
        this.head = new LinkedList(data);
      } else {
        let node = this.head;

        while (node.next) {
          node = node.next;
        }
        node.next = new LinkedList(data);
      }
    };
    exports.insertBefore = (data, newData) => {
      let node = new LinkedList(newData);
      let current = this.head;
      if(this.head.value === data){
        this.head = node;
        this.head.next = current;
        return;
      }
      while(current.next) {
        if(current.next.value === data) {
          break;
        }else {
          current = current.next;
        }
      }
      node.next = current.next;
      current.next = node;
    };
    exports.insertAfter = (data, newData) => {
      let node = new LinkedList(newData);
      let current = this.head;

      while(current){
        if(current.value === data){
          node.next = current.next;
          current.next = node;
          break;
        }

        current = current.next;
      }
    };
    exports.kth = (num) => {
      let current = this.head;
      let temp = null;
      while(current.next) {
        if(current.next === null) {
          break;
        }else {
          
          current = current.next //something
        }
    //set up counter
      }
    };
  }
}
    
const myLinkedList = new LinkedList;

module.exports = myLinkedList;
module.exports = exports = {};

