
module.exports = function towelSort(matrix) {
  let o = [];
  if (matrix && matrix.length > 0) {
  for (let i = 0; i < matrix.length; i++) {
  o.push(...(i % 2 == 0 ? matrix[i] : matrix[i].reverse()));
  }
  }
  return o;
  }