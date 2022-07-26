const { isObject } = require('lodash');
const { EOL } = require('node:os');
const getKeys = require('./getKeys');

const objectStrigify = (obj, indentRep = 4) => {
  const indent = ' ';
  const keys = getKeys(obj);

  const string = keys.map((key) => {
    if (!isObject(obj[key])) {
      return `${EOL}${indent.repeat(indentRep)}${key}: ${obj[key]}`;
    }
    return `${EOL}${indent.repeat(indentRep)}${key}: ${objectStrigify(obj[key], indentRep + 4)}`
  }).join('');
  
  return `{${string}${EOL}${indent.repeat(indentRep - 4)}}`;
};

module.exports = objectStrigify;