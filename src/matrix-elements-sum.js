const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  let result = 0;
  let matrixTranspose = matrix.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),[]);
  matrixTranspose.forEach((el) => el.forEach((item, index) => {
    if(item === 0 && index !== item.length - 1 && item.length !== 1) {
      el[index + 1] = 0;
    }
    result += item;
  }))
  return result;
}

module.exports = {
  getMatrixElementsSum
};
