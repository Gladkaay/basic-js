const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let sep = options.separator;
  if (sep == undefined) {
    sep = "+";
  }
  let addSep = options.additionSeparator;
  if (addSep == undefined) {
    addSep = "|";
  }
  let repT = options.repeatTimes;
  let addRepT = options.additionRepeatTimes;
  let additionOpt = '', res = '';
  if (repT == undefined) {
    repT = 1;
  }
  if (addRepT == undefined) {
    addRepT = 1;
  }
  if (str == null) {
    str = 'null';
  }
  str = String(str);
  if (String(options.addition) === 'null') {
    options.addition = 'null';
  }  
  if (options.addition != undefined) {
  opt = String(options.addition);
  additionOpt = opt.concat('..').repeat(addRepT).slice(0,-2).replaceAll('..', addSep);
  res = str.concat(additionOpt).concat('..').repeat(repT).slice(0,-2).replaceAll('..', sep)
} else {
  res = str.concat('..').repeat(repT).slice(0,-2).replaceAll('..', sep)
}
  return res;
}

module.exports = {
  repeater
};
