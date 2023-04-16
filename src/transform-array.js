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
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const typesArray = arr.map((element) => {
    return { value: element, isControl: typeof element !== 'number' }
  });

  if (typesArray.every(element => !element.isControl)) {
    return arr;
  }

  const result = [];

  for (let i = 0; i < typesArray.length; i++) {
    switch (typesArray[i].value) {
      case '--discard-next':
        if (typesArray[i + 1]) {
          typesArray[i + 1].isDeleted = true;
          // result.splice(i + 1, 1);
        }
        break;
      case '--discard-prev':
        if (typesArray[i - 1]) {
          typesArray[i - 1].isDeleted = true;
          result.splice(i - 1, 1);
        }
        break;
      case '--double-next':
        if (typesArray[i + 1]) {
          typesArray[i + 1].isDuplicated = true;
          result.push(typesArray[i + 1].value);
        }
        break;
      case '--double-prev':
        if (Boolean(typesArray[i - 1]) && typesArray[i - 1].isDeleted !== true) {
          typesArray[i - 1].isDuplicated = true;
          result.push(typesArray[i - 1].value);
        }
        break;
      default:
        if (typesArray[i].isDeleted !== true) {
          result.push(typesArray[i].value);
        }
    }
  }

  return result;
}

module.exports = {
  transform
};
