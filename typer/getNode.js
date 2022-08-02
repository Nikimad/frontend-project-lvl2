const {
  has, set, isObject, isEqual,
} = require('lodash');
const getKeys = require('../modules/getKeys');

const getChildren = (o1, o2, getter) => {
  const chidrenKeys = getKeys(o1, o2);
  const children = chidrenKeys.map((childKey) => getter(o1, o2, childKey));
  return children;
};

const getNode = (obj1, obj2, key) => {
  //    cases map
  const map = {
    complex: (v1, v2, node) => { //  value is nested -> go deep *recursion start
      set(node, 'type', 'nested');
      set(node, 'children', getChildren(v1, v2, getNode));
    },
    average: (v1, v2, node) => {
      if (isEqual(v1, v2)) { //  simmilar values
        set(node, 'type', 'sim');
        set(node, 'value', v1);
      } else { //    update values
        set(node, 'type', 'update');
        set(node, 'before', v1);
        set(node, 'after', v2);
      }
    },
    simple: (v1, v2, node, addition) => {
      if (addition === 'remove') { //    value removed
        set(node, 'type', 'remove');
        set(node, 'value', v1);
      } else { //    value added
        set(node, 'type', 'add');
        set(node, 'value', v2);
      }
    },
  };
  //    values
  const before = obj1[key];
  const after = obj2[key];
  //    node
  const node = {
    name: key,
  };
  if (has(obj1, key) && has(obj2, key)) {
    map[isObject(before) && isObject(after) ? 'complex' : 'average'](before, after, node);
  } else {
    map.simple(before, after, node, has(obj1, key) ? 'remove' : 'add');
  }
  /*
    node = {
        name: key,
        type: nested*, update**, remove, add,
        value: value,
        **before: value,
        **after: value,
        *children: [node{}, node{}, ...],
    }
  */
  return node;
};

module.exports = getNode;
