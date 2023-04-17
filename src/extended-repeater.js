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
  //throw new NotImplementedError('Not implemented');
 let separator = '+';
 let additionSeparator = '|';
 let result = '';
 let newStr = str.toString();
 let arrAddition = [];
 
 if(options.hasOwnProperty('addition')) {
  if(options.hasOwnProperty('additionRepeatTimes') && typeof(options.additionRepeatTimes) === 'number') {
    while(arrAddition.length < options.additionRepeatTimes) {
      arrAddition.push(options.addition);
    }
  } else if (options.hasOwnProperty('additionRepeatTimes') && typeof(options.additionRepeatTimes) !== 'number') {
    arrAddition.push(options.addition);
  }
  if(options.hasOwnProperty('additionSeparator')) {
    newStr +=  arrAddition.join(`${options.additionSeparator}`);
    arrAddition = [];
  } else{
    newStr +=  arrAddition.join('|');
    arrAddition = [];
  }
 }
 if(options.hasOwnProperty('repeatTimes') && typeof(options.repeatTimes) === 'number') {
  while(arrAddition.length < options.repeatTimes) {
    arrAddition.push(newStr);
  }
 } else if (options.hasOwnProperty('repeatTimes') && typeof(options.repeatTimes) !== 'number') {
  arrAddition.push(newStr);
 }
 if(options.hasOwnProperty('separator')) {
  result +=  arrAddition.join(`${options.separator}`);
} else{
  result +=  arrAddition.join(`${separator}`);
}
return result;
}

module.exports = {
  repeater
};
