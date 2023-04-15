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
  newArr.forEach((el, index) => {
    if(el === '--discard-next' && index !== newArr.length - 1) {
      newArr.splice(index, 2);
    } else if (el === '--discard-next' && index === newArr.length - 1) {
      newArr.splice(index, 1);
    }
    if(el === '--discard-prev' && index !== 0) {
      newArr.splice(index - 1, 2);
    } else if (el === '--discard-prev' && index === 0) {
      newArr.splice(index, 1);
    }
    if (el === '--double-next' && index !== newArr.length - 1) {
      el = newArr[index+1];
    } else if (el === '--double-next' && index === newArr.length - 1) {
      newArr.splice(index, 1);
    }
    if ((el === '--double-prev' && index !== 0) && (el === '--double-prev' && arr[index-2] !== '--discard-next')) {
      el = newArr[index-1];
    } else if (el === '--double-prev' && index === 0) {
      newArr.splice(index, 1);
    } else if (el === '--double-prev' && arr[index] === '--discard-next') {
      newArr.splice(index, 1);
    }
  })
 return newArr;
}

module.exports = {
  transform
};
