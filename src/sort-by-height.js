const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
let indexes = [];

for(let i = 0; i < array.length; i++) {
  if (array[i] === -1 ) indexes.push(i);
}

let filteredArray = array.filter(number => number != -1);
let sortedArray = filteredArray.sort((a, b) => a - b);

for(let i = 0; i < indexes.length; i++) {
  sortedArray.splice(indexes[i], 0, -1);
}

return sortedArray;
}

module.exports = {
  sortByHeight
};
