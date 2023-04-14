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
function deleteDigit(num) {
  const splittedNumbers = num.toString().split('');
  let max = 0;

  for (let i = 0; i < splittedNumbers.length; i++) {
    let newNumbers = splittedNumbers.slice(0);
    newNumbers.splice(i, 1);
    if (+newNumbers.join('') > max) {
      max = +newNumbers.join('');
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
