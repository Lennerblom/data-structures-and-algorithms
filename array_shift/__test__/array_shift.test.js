'use strict';

const insertShiftArray = require('../lib/array_shift.js');

describe('insertShiftArray', () => {
    
  it('push() returns a given array and inserts a given input to place in the middle of the array ', () => {
    let arr = [1,2,3,4];
    let num = 14;

    expect(insertShiftArray(arr, num)).toBe([1,2,14,3,4]);
  });
});