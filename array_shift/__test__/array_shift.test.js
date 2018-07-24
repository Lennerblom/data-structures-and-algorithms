'use strict';

const insertShiftArray = require('../lib/array_shift.js');

describe('insertShiftArray', () => {
    
  it('push() returns a given array and inserts a given input to place in the middle of the array ', (done) => {
    let arr = [1,2,3,4];
    let num = 14;

    expect(insertShiftArray(arr, num)).toEqual([1,2,14,3,4]);
    done();
  });

  it('push() returns a given array and inserts a given input to place in the middle of the array ', (done) => {

    expect(insertShiftArray([4,8,15,32],13)).toEqual([4,8,13,15,32]);
    done();
  });

  it('push() returns a given array and inserts a given input to place in the middle of the array ', (done) => {
    let arr = [1,2,3,4];
    let num = 'two';

    expect(insertShiftArray(arr, num)).toEqual([1,2,'two',3,4]);
    done();
  });
});