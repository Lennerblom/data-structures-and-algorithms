'use strict';

import Tree from '../../trees/lib/trees.js';

function breadthFirstTraversal(tree) {
  if(!tree.root === null) {
    return;
  }
  const queue = [];
  queue.push(tree.root);

  while(queue.length > 0) {
    let current = queue[0];
    if(current.left !== null) {
      queue.push(current.left);
    }
    if(current.right !== null) {
      queue.push(current.right);
    }
    console.log(queue.shift().value);
    queue.shift();
  }  
}

export default breadthFirstTraversal;
