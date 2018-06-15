'use strict';

const LinkedList = require('../lib/ll_insertions.js');

describe('Linked List', () => {
  let expected, actual;
  let list = new LinkedList();
  
  it('append() should add data if this.head is null', (done) => {
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

  it('insertBefore() should have a next value that is equal to value it was inserted before', (done) => {
    list.append('taco');
    expected = 'taco';
    list.insertBefore('taco','crunchWrap');
    actual = list.head.next.value;
    expect(actual).toBe(expected);
    done();
  });

  it('insertAfter() should add data after the assigned value', (done) => {
    list.append('taco');
    list.append('tamale');
    list.append('burrito');
    expected = 'crunchWrap';
    list.insertAfter('tamale','crunchWrap');
    actual = list.head.next.next.value;
    expect(actual).toBe(expected);
    done();
  });

  it('insertAfter() assigned value should still exist in the link', (done) => {
    list.append('taco');
    list.append('tamale');
    list.append('burrito');
    expected = 'tamale';
    list.insertAfter('tamale','crunchWrap');
    actual = list.head.next.value;
    expect(actual).toBe(expected);
    done();
  });

});