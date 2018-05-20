'use strict';

function BinarySearch(arr,num) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(num === arr[i]) {
      return i;
    } else {
      count++;
      if(count === arr.length) {
        return -1;
      }
    } 
  }
}

module.exports = BinarySearch;