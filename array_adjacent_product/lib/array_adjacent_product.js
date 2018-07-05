'use strict';

function LargestProduct(matrix) {
  let lrgProd = 0;

  let maxColumn = matrix[0].length -1;

  let maxRow = matrix.length -1;

  for(let column = 0; column <= maxColumn.length; column++) {
    for(let row = 0; row <= maxRow.length; row++) {
      let mtxIndxVal = matrix[row][column];
      const east = matrix[row][column +1];
      const SE = matrix[row +1][column +1];
      const south = matrix[row +1][column];
      const SW = matrix[row +1][column -1];
      const west = matrix[row][column -1];
      const NW = matrix[row -1][column -1];
      const north = matrix[row -1][column];
      const NE = matrix[row -1][column +1];
      let currentProduct = 0;
      if(column + 1, maxColumn){
        currentProduct = mtxIndxVal * east;
        lrgProd = Math.max(lrgProd, currentProduct);
      }
    }
  }
}

export default LargestProduct;

// let LargestProduct = (matrix) => {
//   for(let i = 0; i < 3; i++){
//     let j = i;
//     console.log(i);
//     console.log(j);
//     if((matrix[i][j]) === (matrix[i + 1 || i -1 || i][j + 1 || j -1 || j])) {
//       (matrix[i][j]);
//     }
  
//     return matrix.forEach(x => (Math.max(matrix[i]) * Math.max(matrix[i])));
//   }
// };
// LargestProduct([[1,2,3],[4,5,6],[7,8,9],[7,8,9]]);
