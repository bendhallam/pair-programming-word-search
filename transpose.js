const transpose = function(matrix) {
  const columnLength = matrix.length;
  const rowsLength = matrix[0].length;
  //empty matrix init
  let newMatrix = [];
  //create an empty array for each column in the original matrix
  for (let i = 0; i < rowsLength; i++) {
    newMatrix[i] = [];
    // add the relative part of the original matrix
    for (let j = 0; j < columnLength; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
};

module.exports = transpose;