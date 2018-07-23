'use strict';

import Tree from '../../trees/lib/trees.js';

import bft from '../lib/breadthFirstTraversal.js';

describe('Breadth First Traversal', () => {
  let mytree = new Tree;
  mytree.insert(5);
  mytree.insert(6);
  mytree.insert(7);
  mytree.insert(3);
  mytree.insert(1);
  mytree.insert(11);


  it('should return something', () => {
    let actual, expected;
    actual = bft(mytree);
    expected = 'something';
    expect(actual).toBe(expected);
  });
});
