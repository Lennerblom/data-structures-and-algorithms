'use strict';

import Tree from '../../trees/lib/trees.js';

function findMaxValue(tree) {
  if(tree.root === null){
    return 0;
  }
  let current = tree.root;
  console.log(current.right);
  while(current.right){
    console.log(current.right);
    current = current.right;
  }
     
  return current.value;
}

export default findMaxValue;
// Feature Tasks
// Write a function called find-maximum-value which takes binary tree as its only imput. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.