'use strict';

import Tree from '../../trees/lib/trees.js';

function findMaxValue(tree) {
  if(tree.root === null){
    return 0;
  }
  let current = tree.root;
  while(current.right){
    current = current.right;
  }
  return current.value;
}

export default findMaxValue;