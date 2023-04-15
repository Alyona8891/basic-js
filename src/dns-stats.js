const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  let result = {};
  const newDomainsArr = domains.map((el) => el = el.split('.').reverse());
  const sortDomains = newDomainsArr.sort();
  sortDomains.forEach((el, index) => {
    let str = '';
    for(let i=0; i<el.length; i++) {
      str += `.${el[i]}`;
      if(result[str]) {
        result[str] += 1;
      } else {
        result[str] = 1;
      }
    }
  })
  return result;
}
 
module.exports = {
  getDNSStats
};
