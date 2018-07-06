'use strict';

class Node {
    constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.children = null;
    }
insert(node){
    if(!this.root){
        this.root = new Node(node);
        return this.root;
    } 
    let current = root;
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
    } else {
        if(!current.right){
            current.right = newNode;
            break;
        } else {
            current = current.right;
        }
    }
}
}
}
let breadthFirstTraversal(tree) {

}


// Feature Tasks
// Write a function called breadthFirstTraversal which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.