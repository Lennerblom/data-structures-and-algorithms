'use strict';

import FBT from '../lib/fizzBuzzTree';
import Trees from '../../trees/lib/trees.js';

describe('fizzbuzztree', () => {

  let actual, expected;

  it('should return fizzbuzz if root = 15', () => {
    let mytree = new Trees;
    mytree.insert(15);
    FBT(mytree);
    actual = mytree.root.value;
    console.log(actual);
    expected = 'fizzbuzz';
    expect(actual).toBe(expected);
  });

  it('should return fizz if node = 6', () => {
    let mytree = new Trees;
    mytree.insert(3);
    mytree.insert(4);
    mytree.insert(1);
    mytree.insert(6);
    FBT(mytree);
    actual = mytree.root.right.right.value;
    console.log(actual);
    expected = 'fizz';
    expect(actual).toBe(expected);
  });

  it('should return buzz if node = 10', () => {
    let mytree = new Trees;
    mytree.insert(3);
    mytree.insert(8);
    mytree.insert(10);
    FBT(mytree);
    actual = mytree.root.right.right.value;
    console.log(actual);
    expected = 'buzz';
    expect(actual).toBe(expected);
  });
});