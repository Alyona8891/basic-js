const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  let maxNum = 0;
  let arrN  = n.toString().split('');
  arrN.forEach((el, index) => {
    let arrNHelp = n.toString().split('');
    arrNHelp.splice(index, 1);
    let num = +(arrNHelp.join(''));
    if(num > maxNum) {
      maxNum = num;
    }
  })
  return maxNum;
}

module.exports = {
  deleteDigit
};
