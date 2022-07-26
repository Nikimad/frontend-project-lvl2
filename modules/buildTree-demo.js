/* const { has, isObject } = require('lodash');
const getKeys = require('./getKeys');
const { obj1, obj2 } = require('../__fixtures__/test-objects');

const buildTree = (obj1, obj2) => {
  const keys = getKeys(obj1, obj2);
  const tree = {};
  keys.forEach((key) => {
    if (isObject(obj1[key]) && isObject(obj2[key])) {
      tree[key] = buildTree(obj1[key], obj2[key]);
    } else if (obj1[key] === obj2[key]) {
      tree[key] = 'sim';
    } else {
      let type;
      if (has(obj1, key)) {
        type = 'remove';
      }
      if (has(obj2, key)) {
        type = type === 'remove' ? 'update' : 'add';
      }
      tree[key] = type;
    }
  });
  return tree;
};
const tree1 = buildTree(obj1, obj2);

const { EOL } = require('node:os');

const objectStrigify = (obj) => {
  const keys = getKeys(obj);

  let result = '';

  keys.forEach((key) => {
    if (!isObject(obj[key])) {
      result += `${EOL}    ${key}: ${obj[key]}`;
    } else {
      result += `${EOL}    ${key}: ${objectStrigify(obj[key])}`;
    }
  });

  return `{${result}${EOL}}`;
};

function getAnswer(prefix, key, value) {
  const prefixes = {
    sim: `${EOL}   `,
    remove: `${EOL}  -`,
    add: `${EOL}  +`,
  };
  if (isObject(value)) {
    return `${prefixes[prefix]} ${key}: ${objectStrigify(value)}`;
  }
  return `${prefixes[prefix]} ${key}: ${value}`;
}

const getResult = (obj1, obj2, tree) => {
  const keys = getKeys(tree);

  let result = '';
  keys.forEach((key) => {
    if (!isObject(tree[key])) {
      switch (tree[key]) {
        case 'sim':
          result += getAnswer('sim', key, obj1[key]);
          break;
        case 'remove':
          result += getAnswer('remove', key, obj1[key]);
          break;
        case 'add':
          result += getAnswer('add', key, obj2[key]);
          break;
        case 'update':
          result += getAnswer('remove', key, obj1[key]);
          result += getAnswer('add', key, obj2[key]);
          break;
        default:
          break;
      }
    } else {
      result += `${EOL}    ${key}: ${getResult(obj1[key], obj2[key], tree[key])}`;
    }
  });

  return `{${result}${EOL}}`;
};

console.log(getResult(obj1, obj2, tree1));
*/
