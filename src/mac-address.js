const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

function isMAC48Address(number) {
  if (number.split('-').length < 6) return false;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const splittedNumber = number.split('');
  const filteredArray = splittedNumber.filter(x => x !== '-');
  let isMACadress = true;
  for (let i = 0; i < filteredArray.length; i++) {
    if (isNaN(+filteredArray[i]) && !letters.includes(filteredArray[i])) {
      isMACadress = false;
      break;
    }
  }
  return isMACadress;
}

module.exports = {
  isMAC48Address
};
