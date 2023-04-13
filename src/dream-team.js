const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  /*throw new NotImplementedError('Not implemented');*/
  if(!Array.isArray(members)) {
    return false;
  }
  let result = '';
  const filterMembers = members.filter(e => typeof(e) === 'string');
  let arrTrim = [];
  for(let i = 0; i < filterMembers.length; i++) {
    arrTrim.push(filterMembers[i].trim().toUpperCase());
  }
  const sortArr = arrTrim.sort();
  for(let j=0; j<sortArr.length; j++) {
    result += sortArr[j][0];
  }
  return result;
}

module.exports = {
  createDreamTeam
};
