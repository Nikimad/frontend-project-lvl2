const { isObject } = require('lodash');
const getKeys = require('./getKeys');
const getCustomEOL = require('./getCustomEOL');

const strigifyObj = (obj, indentRep = 4) => {
  const keys = getKeys(obj);
  // Map
  const map = {
    flat: (key, value, rep) => `${getCustomEOL(rep)}${key}: ${value}`,
    nested: (key, value, rep) => `${getCustomEOL(rep)}${key}: ${strigifyObj(value, rep + 4)}`,
  };
  //  get result string
  const string = keys.map((key) => (!isObject(obj[key]) ? map.flat : map.nested)(key, obj[key], indentRep)).join('');

  return `{${string}${getCustomEOL(indentRep - 4)}}`;
};

module.exports = strigifyObj;
