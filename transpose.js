const transpose = function(matrix) {
let newMatrix = [];
for (let i = 0; i < matrix[0].length; i++) {
  newMatrix.push([]);
}
for (let r = 0; r < matrix.length; r++) {
  for (let c = 0; c < matrix[r].length; c++) {
   newMatrix[c].push(matrix[r][c]);
  }
}
return newMatrix;
}
module.exports = transpose;
