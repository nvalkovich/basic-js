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
  let splittedStr = str.split('');
  const letters = [];

  let prevLetter = null;
  for (let i = 0; i < splittedStr.length; i++) {
    const letter = splittedStr[i];
    if (letter != prevLetter) {
      letters.push(letter);
      prevLetter = letter;
    } else {
      letters[letters.length - 1] += letter;
    }
  }

  let result = letters.map(element => {
    if (element.length > 1) {
      return `${element.length}${element[0]}`
    } else {
      return element;
    }
  })

  return result.join('');
}

module.exports = {
  encodeLine
};
