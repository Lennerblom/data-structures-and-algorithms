'use strict';

const BinarySearch = require('../lib/array_binary.js');

describe('BinarySearch', () => {

  it('BinarySearch() returns index of given number', () => {

    expect(BinarySearch([4,8,15,16,32],16)).toBe(3);
    
  });
});