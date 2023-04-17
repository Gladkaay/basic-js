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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let transformArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number' || arr[i] != '--discard-next' || arr[i] != '--discard-prev' || arr[i] != '--double-next' ||  arr[i] != '--double-next') {
    transformArr[i] = arr[i]; 
    } else {
      if (arr[i] == '--discard-next') {
        transformArr[i+1] = arr[i+1];
        i++;
      }
      if (arr[i] == '--discard-prev') {
        transformArr[i-1] = arr[i+1];
        i++;
      }
      if (arr[i] == '--double-next') {
        transformArr[i] = arr[i+1];
      }
      if (arr[i] == '--double-prev') {
        transformArr[i] = arr[i-1];
      }
        let tr = [];
  for (let i = 0; i < transformArr.length; i++) {
    if (typeof transformArr[i] != 'number') {
      transformArr.splice(i-1, 1);
    }
  }
    }
  }

  return transformArr;
}

module.exports = {
  transform
};
