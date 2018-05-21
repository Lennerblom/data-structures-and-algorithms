'use strict';

const insertShiftArray = require('../lib/array_shift.js');

describe('insertShiftArray', () => {
    
  xit('push() returns a given array and inserts a given input to place in the middle of the array ', () => {
    let arr = [1,2,3,4];
    let num = 14;
    insertShiftArray(arr,num);

    expect(arr).toBe([1,2,3,14,4]);
  });
});