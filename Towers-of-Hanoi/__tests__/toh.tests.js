'use strict';

const toh = require('../lib/towersOfHanoi.js');

describe('Towers of Hanoi', () => {
  let actual, expected;
  it('should return complete! when n is a interger greater than 0', (done) => {
    actual = toh('3', 'a','b','c');
    expected = 'complete!';
    expect(actual).toBe(expected);
    done();
  });

  it('should return "enter a valid number" when n = 0', (done) => {
    actual = toh('0', 'a','b','c');
    expected = 'enter a valid number';
    expect(actual).toBe(expected);
    done();
  });

  it('should return "enter a valid number" when n = -2', (done) => {
    actual = toh('-2', 'a','b','c');
    expected = 'enter a valid number';
    expect(actual).toBe(expected);
    done();
  });
});