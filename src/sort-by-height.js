const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
 // throw new NotImplementedError('Not implemented');
  let filterSortArr = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  let y = [];
  arr.forEach((el) => {
    if(el !== -1) {
      y.push(filterSortArr[0]);
      filterSortArr.splice(0, 1);
    } else {
      y.push(el);
    }
  })
  return y;
}

module.exports = {
  sortByHeight
};