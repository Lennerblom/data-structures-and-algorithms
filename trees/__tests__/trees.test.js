'use strict';

import Tree from '../../trees/lib/trees.js';

describe('Binary Trees', () => {
  let mytree = new Tree;
  
  it('should return a value slotted in the right sequence', () => {
    mytree.insert(5);
    mytree.insert(6);
    mytree.insert(7);
    mytree.insert(3);
    mytree.insert(1);
    mytree.insert(11);
  
    let actual, expected;
    actual = mytree.root.right.right.value;
    expected = 7;
    expect(actual).toBe(expected);
  });


});