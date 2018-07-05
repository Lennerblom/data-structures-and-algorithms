'use strict';

let towersOfHanoi = (n,a,b,c) => {
  if(n > 0) {
    towersOfHanoi((n-1),a,c,b);
    console.log('move disc ' + n + ' from ' + a + ' to ' + c);
    towersOfHanoi(n-1,b,a,c);
  } else {
    return 'enter a valid number';
  }
  return 'complete!';
};

module.exports = towersOfHanoi;