const { isObject } = require('lodash');
const getKeys = require('../modules/getKeys');
const getCustomEOL = require('../modules/getCustomEOL');
const strigifyObj = require('../modules/stringifyObj');
//  general variables
const prefixes = {
  sim: '  ',
  remove: '- ',
  add: '+ ',
};
//  Templates Map
const stylishTemplates = {
  flat: (key, value, prefix, indentRep) => `${getCustomEOL(indentRep)}${prefix}${key}: ${value}`,
  nested: (key, value, prefix, indentRep) => `${getCustomEOL(indentRep)}${prefix}${key}: ${strigifyObj(value, indentRep + 6)}`,
};
const getTemplate = (key, value, prefix, indentRep) => (!isObject(value) ? stylishTemplates.flat
  : stylishTemplates.nested)(key, value, prefixes[prefix], indentRep);

//  Stylish formater
const strigifyStylish = (obj1, obj2, tree, indentRep = 4) => {
  // Type Map
  const typeMap = {
    sim: (key, before, after, rep) => getTemplate(key, before, 'sim', rep - 2),
    remove: (key, before, after, rep) => getTemplate(key, before, 'remove', rep - 2),
    add: (key, before, after, rep) => getTemplate(key, after, 'add', rep - 2),
    update: (key, before, after, rep) => `${getTemplate(key, before, 'remove', rep - 2)}${getTemplate(key, after, 'add', rep - 2)}`,
    nested: (key, before, after, rep, typeTree) => `${getCustomEOL(rep)}${key}: ${strigifyStylish(before, after, typeTree, rep + 4)}`,
  };
  const keys = getKeys(tree);
  //  get result string
  const string = keys.map((key) => (!isObject(tree[key]) ? typeMap[tree[key]]
    : typeMap.nested)(key, obj1[key], obj2[key], indentRep, tree[key])).join('');

  return `{${string}${getCustomEOL(indentRep - 4)}}`;
};

module.exports = strigifyStylish;
