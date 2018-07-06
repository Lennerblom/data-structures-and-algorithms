'use strict';

import FBT from '../lib/fizzBuzzTree';
import Trees from '../../trees/lib/trees.js';

describe('fizzbuzztree', () => {

  let actual, expected;

  it('should return fizzbuzz if root = 15', () => {
    let mytree = new Trees;
    mytree.insert(15);
    console.log(mytree);//it should be 15! works in repl.it
    actual = FBT(mytree);
    console.log(actual);
    expected = 'fizzbuzz';
    expect(actual).toBe(expected);
  });
});