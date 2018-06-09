'use strict';
console.log('did i make it here?');

const LL = require('../lib/ll_insertions.js');

describe('Linked List', () => {
  let expected, actual;
  
  it('append() should add data to the end of the list', (done) => {
    
    expected = 4;
    actual = LL.append(4);

    expect(actual).toBe(expected);
    done();
  });

  it('insertBefore() should add data to the end of the list', (done) => {
    
    expected = 4;
    actual = LL.insertBefore(2,4);

    expect(actual).toBe(expected);
    done();
  });

  it('insertAfter() should add data to the end of the list', (done) => {
    
    expected = 4;
    actual = LL.insertAfter(2,4);

    expect(actual).toBe(expected);
    done();
  });
});