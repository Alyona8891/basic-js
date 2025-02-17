const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  let result = 0;
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');
  arrS1.forEach((el) => {
    for(let i=0; i<arrS2.length; i++) {
      if(el === arrS2[i]) {
        result = result + 1;
        arrS2.splice(i, 1);
        return;
      }
    }
  })
  return result;
}

module.exports = {
  getCommonCharacterCount
};
