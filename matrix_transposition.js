const transpose = function(matrix) {
  let newArray = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      newArray[j].push(matrix[i][j]);
    }
  }
  return newArray;
};

module.exports = transpose;