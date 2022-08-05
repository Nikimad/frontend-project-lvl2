import _ from 'lodash';
import getKeys from '../modules/getKeys.js';

const getChildren = (o1, o2, getter) => {
  const chidrenKeys = getKeys(o1, o2);
  const children = chidrenKeys.map((childKey) => getter(o1, o2, childKey));
  return children;
};

const getNode = (obj1, obj2, key) => {
  //    cases map
  const map = {
    complex: (v1, v2, node) => { //  value is nested -> go deep *recursion start
      _.set(node, 'type', 'nested');
      _.set(node, 'children', getChildren(v1, v2, getNode));
    },
    average: (v1, v2, node) => {
      if (_.isEqual(v1, v2)) { //  simmilar values
        _.set(node, 'type', 'sim');
        _.set(node, 'value', v1);
      } else { //    update values
        _.set(node, 'type', 'update');
        _.set(node, 'before', v1);
        _.set(node, 'after', v2);
      }
    },
    simple: (v1, v2, node, addition) => {
      if (addition === 'remove') { //    value removed
        _.set(node, 'type', 'remove');
        _.set(node, 'value', v1);
      } else { //    value added
        _.set(node, 'type', 'add');
        _.set(node, 'value', v2);
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
  if (_.has(obj1, key) && _.has(obj2, key)) {
    map[_.isObject(before) && _.isObject(after) ? 'complex' : 'average'](before, after, node);
  } else {
    map.simple(before, after, node, _.has(obj1, key) ? 'remove' : 'add');
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

export default getNode;
