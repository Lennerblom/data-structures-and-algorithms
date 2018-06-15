'use strict';

const LinkedList = require('../lib/ll_insertions.js');

describe('Linked List', () => {
  let expected, actual;
  let list = new LinkedList();
  
  it('append() should add data to an empty list', (done) => {
    list.append(4);
    expected = 4;
    actual = list.head.value;

    expect(actual).toBe(expected);
    done();
  });

  it('append() should add data to the end of the list', (done) => {
    list.append('taco');
    list.append('tamale');
    list.append('burrito');
    expected = 'burrito';
    actual = list.head.next.next.value;
   
    expect(actual).toBe(expected);
    done();
  });

  it('insertBefore() should add data before a given value in the list', (done) => {
    list.append('taco');
    list.append('tamale');
    list.append('burrito');
    expected = 'crunchWrap';
    list.insertBefore('tamale','crunchWrap');
    actual = list.head.next.value;
    expect(actual).toBe(expected);
    done();
  });

  it('insertAfter() should add data to the end of the list', (done) => {
    list.append('taco');
    list.append('tamale');
    list.append('burrito');
    expected = 'crunchWrap';
    list.insertAfter('tamale','crunchWrap');
    actual = list.head.next.next.value;
    expect(actual).toBe(expected);
    done();
  });

});