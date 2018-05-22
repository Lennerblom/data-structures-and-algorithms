'use strict';

function insertShiftArray(arr, num) {
  let newArr = [];
  console.log(num);
  let index = 0;
  if((arr.length) %2 === 0) {
    let index = (arr.length/2);
    
    console.log(index);
  } else {
    let index = (arr.length +1)/2;
    console.log(index);
  };
    for(let i = 0; i < index; i++){
      newArr[i] = arr[i];
      return newArr;
    };
    newArr[index] = num;
    for(let j = index+1;  j < arr.length-1; j++) {
      newArr[j] = arr[j];
    };
 
  return newArr;
}


module.exports = insertShiftArray();