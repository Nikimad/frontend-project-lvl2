const {
  has, set, isObject, isEqual,
} = require('lodash');
const getKeys = require('../modules/getKeys');

//  recursion checker
const isNestedBoth = (value1, value2) => isObject(value1) && isObject(value2);
// "flatTyper" for terminate recursion
const getType = (obj1, obj2, key) => {
  const before = obj1[key];
  const after = obj2[key];
  // types: sim, remove, add
  let type;
  if (has(obj1, key) && has(obj2, key)) {
    type = isEqual(before, after) ? 'sim' : 'update';
  } else {
    type = has(obj1, key) ? 'remove' : 'add';
  }

  return type;
};

const getTypeTree = (obj1, obj2) => {
  const keys = getKeys(obj1, obj2);

  const typeTree = keys.reduce((tree, key) => {
    const before = obj1[key];
    const after = obj2[key];
    //  types: [nested*], sim, remove, add
    //    *nested - phony type, init recursion
    let type;
    if (!isNestedBoth(before, after)) {
      //  terminal script
      type = getType(obj1, obj2, key);
    } else {
      //  recursion
      type = getTypeTree(before, after);
    }
    //  add node to tree
    set(tree, key, type);

    return tree;
  }, {});

  return typeTree;
};

module.exports = getTypeTree;
