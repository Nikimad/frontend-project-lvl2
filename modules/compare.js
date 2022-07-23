const { has } = require('lodash');
const getAnswer = require('./getAnswer');

function compare(obj1, obj2, key) {
  let result = '';
  //  the key always exists in one of the objects
  if (obj1[key] === obj2[key]) {
    result += getAnswer('gen', key, obj1[key]);
  } else {
    if (has(obj1, key)) {
      result += getAnswer('fprop', key, obj1[key]);
    }
    if (has(obj2, key)) {
      result += getAnswer('sprop', key, obj2[key]);
    }
  }
  return result;
}

module.exports = compare;
