'use strict';

function insertShiftArray(arr, num) {
  let index = 0;
  if(arr.length %2 === 0) {
    let index = arr.length/2 + 1;
    for(let i = index +1; i < arr.length; i++) {
      arr[i++];
    }
  } else {
    let index = arr.length++/2;

    for(let i = index +1; i < arr.length; i++) {
      arr[i++];
    }
  }
  num = arr[index];
  return arr;
}
insertShiftArray([1,2,3,4,5], 14);

module.exports = insertShiftArray();