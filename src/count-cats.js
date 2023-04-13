const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  /*throw new NotImplementedError('Not implemented');*/
  let num = 0;
  matrix.forEach((el) => {
    for(let i=0; i<el.length; i++) {
      if(el[i] === "^^") {
        num += 1;
      } 
    }
  })
  return num;
}

module.exports = {
  countCats
};
