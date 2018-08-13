'use strict';
const repeatedWord = (str) => {
  let newStr = str.toLowerCase().match(/\w+/g);
  let arr = newStr;
  let hash = {};
  let repeat = '';
  
  for(let i = 0; i < arr.length; i++){
    hash[i] = arr[i];
  
    for(let j = 0; j < arr.length; j++){
      if(i !== j && hash[i] === hash[j]){
        repeat = hash[j];
        return repeat;
      }
    }
  }
};
export default repeatedWord;
