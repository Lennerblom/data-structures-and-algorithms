'use strict';

import mBV from '../lib/multi-bracket-validation';

describe('mBV ', () => {
  let actual, expected;
  it('should return true with an even set of brackets', (done) => {

    actual = mBV('{}');
    expected = true;
    expected(actual).toBe(expected);
    done();
  });
});