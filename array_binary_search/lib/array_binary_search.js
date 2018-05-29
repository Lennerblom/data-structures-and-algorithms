 'use strict';


// function BinarySearch (arr,num) {
//   let upperBound = arr.length;
//   let lowerBound = 0;
//   let middle = Math.floor(arr.length/2);
//   let candidate = arr[middle];
//   if(num === candidate) {
//     return middle;
//   }  
  
//   if(num < candidate) {
//     upperBound = middle;
//   }

//   if(num > candidate) {
//     lowerBound = middle;
//   }
//   middle = Math.floor((upperBound - lowerBound)/2);
//   candidate = arr[middle];

//   if(num === candidate) {
//     return middle;
// }
//   if(num < candidate) {
//   upperBound = middle;
  
//   if(num > candidate) {
//     lowerBound = middle;
//   }
//   middle = Math.floor((upperBound - lowerBound)/2 + lowerBound);

//   candidate = arr[middle];

//   if(num === candidate) {
//     return middle;
// } 

// return -1;












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