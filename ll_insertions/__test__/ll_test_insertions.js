'use strict';

const myLinkedList = require('../lib/ll_insertions.js');

describe('Linked List', () => {
  let expected, actual;
  
  it('append() should add data to the end of the list', () => {
    
    expected = 4;
    actual = myLinkedList.append(4);

    expect(actual).toBe(expected);

  });
});