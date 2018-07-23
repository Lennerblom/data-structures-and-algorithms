'use strict';

import Tree from '../../trees/lib/trees.js';

import fmv from '../lib/findMaxValBinaryTree.js';

describe('Find Max Value Binary Tree', () => {
  let mytree = new Tree;


  it('should return 11 if tree has a max value of 11', () => {
    mytree.insert(5);
    mytree.insert(6);
    mytree.insert(7);
    mytree.insert(3);
    mytree.insert(1);
    mytree.insert(11);
  
    let actual, expected;
    actual = fmv(mytree);
    expected = 11;
    expect(actual).toBe(expected);
  });

  it('should return 0 if tree is empty', () => {
  
    let actual, expected;
    actual = fmv(mytree);
    expected = 0;
    expect(actual).toBe(expected);
  });
});