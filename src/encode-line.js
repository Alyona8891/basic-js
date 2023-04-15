const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  const strArr = str.split('');
  const arr = [];
  arr.push(1);
  arr.push(strArr[0]);
 for(let i=1; i<strArr.length; i++) {
    if(strArr[i] !== arr[arr.length - 1]){
      arr.push(1);
      arr.push(strArr[i]);
    } else {
      arr[arr.length-2] += 1;
    }
  }
  arr.forEach((el, index) => {
    if(el === 1) {
      arr.splice(index, 1)
    }
  })
  return arr.join('');
}

module.exports = {
  encodeLine
};
