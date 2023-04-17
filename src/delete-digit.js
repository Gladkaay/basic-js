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
function deleteDigit(n) {
  let nStr = n.toString();
  let res = [];
  for (let i = 0; i < nStr.length; i++) {
    res[i] = nStr.replace(nStr[i], '');
  }
  let max = 0;
  for (let i = 0; i < nStr.length; i++) {
    if (+res[i] > max) {
      max = +res[i];
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
