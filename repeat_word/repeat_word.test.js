'use strict';

import repeatedWord from './repeat_word.js';

describe('repeatedWord', () => {

  let expected, actual;
  it('Should return the first repeated word in a string', () => {
    expected = 'lost';
    actual = repeatedWord('i was lost in the woods and lost forever...');
    expect(actual).toBe(expected);
  });

  it('Should return the first repeated word in a string even if there are other repeated words later', () => {
    expected = 'lost';
    actual = repeatedWord('i was lost in the woods and lost forever, but i was ...');
    expect(actual).toBe(expected);
  });

  it('Should still return first repeat if puncuation like a "," is present', () => {
    expected = 'lost';
    actual = repeatedWord('i was lost, in the woods and lost forever...');
    expect(actual).toBe(expected);
  });

  it('Should be case insensitive', () => {
    expected = 'lost';
    actual = repeatedWord('i was LOST in the woods and lost, forever...');
    expect(actual).toBe(expected);
  });
});