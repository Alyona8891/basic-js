const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    let depth = 1;
    let maxDepth = 1;
    arr.forEach(el => { 
      if(Array.isArray(el)) {
        depth += this.calculateDepth(el);
      } 
      if(maxDepth < depth) {
        maxDepth = depth;
      }
      depth = 1;
    });
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
