const { NotImplementedError, checkForNotThrowingErrors } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  /*throw new NotImplementedError('Not implemented');*/
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date) || date.toString() == Date.prototype.toString.call(new Date())) {
    throw new Error ('Invalid date!');
  }
  let month = date.getMonth();
  if (!isNaN(Date.parse(date))) {
    if(month === 1 || month === 0 || month === 11) {
      return "winter";
    } else if (month <= 4) {
      return "spring";
    } else if (month <= 7) {
      return "summer";
    } else if (month <= 10) {
      return "autumn";
    }
  } else {
    throw new Error ('Invalid date!');
  }
}
module.exports = {
  getSeason
}
