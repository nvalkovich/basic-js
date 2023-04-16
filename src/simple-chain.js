const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    if (Array.isArray(this.result)) {
      if (value === undefined) {
        this.result.push('(  )');
      } else {
        this.result.push(`( ${value} )`);
      }
    }
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position - 1) || position > this.result.length || position - 1 < 0) {
      this.result = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.result.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    if (Array.isArray(this.result)) {
      this.result.reverse();
    }
    return this;
  },

  finishChain() {
    const resultString = this.result.join('~~');
    this.result = [];
    return resultString;
  }
};

module.exports = {
  chainMaker
};
