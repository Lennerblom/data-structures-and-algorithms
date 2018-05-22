'use strict';

const BinarySearch = require('../lib/array_binary_search.js');

describe('BinarySearch', () => {

  it('BinarySearch() returns index of given number', () => {
    expect(BinarySearch([4,8,15,16,32],16)).toBe(3);
  });

  it('BinarySearch() returns -1 if search key does not exist in array', () => {
    expect(BinarySearch([4,8,15,16,32],7)).toBe(-1);
  });

  it('BinarySearch works with large arrays', () => {
    function makeBigArray() {
      const bigArr = [];
      for(let i = 0; i < 1000000; i++) {
        bigArr.push(i);
      }
      return bigArr;
    }
    makeBigArray();

    expect(BinarySearch(makeBigArray(),4459)).toBe(4459);
  });
});