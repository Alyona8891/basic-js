const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    value = value.toString();
    if(value) {
      this.chain.push(value);
    } else {
      this.chain.push('()');
    }
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
