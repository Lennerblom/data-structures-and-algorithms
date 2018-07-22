'use strict';

import Tree from '../../trees/lib/trees';

function fizzBuzzTree(tree) {
  if(tree.root.value % 3 === 0 && tree.root.value % 5 === 0){
    tree.root.value = 'fizzbuzz';
  } else if(tree.root.value % 3 === 0) {
    tree.root.value = 'fizz';
  } else if(tree.root.value % 5 === 0) {
    tree.root.value = 'buzz';
  }
  for(let i = 0; i < tree.children.length; i++){
    if(tree.children[i].value % 3 === 0 && tree.children[i].value % 5 === 0){
      tree.children[i].value = 'fizzbuzz';
    } else if(tree.children[i].value % 3 === 0) {
      tree.children[i].value = 'fizz';
    }  else if(tree.children[i].value % 5 === 0) {
      tree.children[i].value = 'buzz';
    }  
  }
  return tree;
}

export default fizzBuzzTree;
