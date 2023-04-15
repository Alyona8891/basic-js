const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  if(!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  const newArr = [].concat(arr);
  const result = [];
  newArr.forEach((el, index) => {
    if(el === '--discard-next' && index !== newArr.length - 1) {
      newArr.splice(index + 1, 1);
    }
    if(el === '--discard-prev' && index !== 0 && newArr[index-1] !== '--discard-next') {
      result.pop();
    } 
    if (el === '--double-next' && index !== newArr.length - 1) {
      result.push(newArr[index+1]);
    }
    if (el === '--double-prev' && index !== 0 && newArr[index-1] !== '--discard-next') {
      result.push(newArr[index-1]);
    } 
    if (el !== '--double-prev' && el !== '--double-next' && el !== '--discard-next' && el !== '--discard-prev') {
      result.push(el);
    }
  })
 return result;
}

module.exports = {
  transform
};
