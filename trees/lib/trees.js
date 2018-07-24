'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Trees {
  constructor() {
    this.root = null;
    this.children = [];
  }
  insert(node){
    if(!this.root){
      this.root = new Node(node);
      return this.root;
    } 
    let current = this.root;
    let newNode = new Node(node);

    while(current){
      if(node < current.value){
        if(!current.left){
          current.left = newNode;
          break;
        }
        else {
          current = current.left;
        }
        this.children.push(newNode);
      } else {
        if(!current.right){
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
        this.children.push(newNode);
      }
    }
  }
  // otherInsert(node) {
  //   node = new Node();
  //   if(this.root === null) {
  //     this.root = node;
  //   } else {
  //     this.children.push(node);
  //   }
  // }

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
      return node.value;
    } else if(this.children){
      for(let i = 0; i < this.children.length; i++) {
        console.log(this.children.length);
        if(this.children[i].value === node.value){
          return(this.children[i].value);
        } else {return('node does not exist');}
      }
    }
  }

  serialize() {
    let str = '';
    str += this.root;
    let node = this.children;
    while(node) {
      str += '[' + node.value + '] ';
    }
    return str;
  }

  deserialize() {

  }

}
export default Trees;
