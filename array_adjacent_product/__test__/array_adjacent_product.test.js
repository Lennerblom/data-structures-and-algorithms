'use strict';

import LargestProduct from'../lib/array_adjacent_product.js';

describe('Array Adjacent Product', () => {

  let expected, actual;

  xit('should return the product of a simple matrix', (done) => {
    expected = 8;

    actual = 2 * 4;

    expect(actual).toBe(expected);

    done();
  });

  xit('should return the product of a simple matrix', (done) => {
    expected = 8;

    actual = [[2,4]];

    expect(LargestProduct(actual)).toBe(expected);

    done();
  });
});