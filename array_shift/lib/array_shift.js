'use strict';

function insertShiftArray(arr, num) {
  const newArr = [];
  let index = 0;
  if((arr.length) %2 === 0) {
    index = (arr.length/2); 
  } else {
    index = (arr.length +1)/2;
  }
  for(let i = 0; i < index; i++){
    newArr[i] = arr[i];
  }
  newArr[index] = num;
  for(let j = index;  j < arr.length; j++) {
    newArr[j+1] = arr[j];
  }
  return newArr;
}

module.exports = insertShiftArray;