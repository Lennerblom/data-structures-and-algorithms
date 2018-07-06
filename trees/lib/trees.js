'use strict';

class Node {
  constructor(value) {
    this.value = value;
    // this.left = null;
    // this.right = null;
  }
}

class Trees {
  constructor() {
    this.root = null;
    //this.children = [];
  }

  insert(node) {
    node = new Node();
    if(this.root === null) {
      this.root = node;
    } else {
      this.children.push(node);
    }
  }

  remove(node) {
    if(this.root.value === node.value) {
      delete(root.value);
    } else if(this.children){
      for(let i =0; i < this.children.length; i++) {
        if(this.children[i].value === node.value){
          delete(this.children[i]);
        }
      }
    }
  }

  find(node) {
    node = new Node(node);
    if(this.root.value === node.value) {
      return node;
    } else if(this.children){
      for(let i = 0; i < this.children.length; i++) {
        console.log(this.children.length);
        if(this.children[i].value === node.value){
          return(this.children[i]);
        } else {return('node does not exist');}
      }
    }
  }

  serialize() {

  }

  deserialize() {

  }

}
export default Trees;
