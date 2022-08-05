const { EOL } = require('node:os');
const {
  isObject, isString, has,
} = require('lodash');

const valueCheck = (v) => {
  if (isObject(v)) {
    return '[complex value]';
  }
  return isString(v) ? `'${v}'` : v;
};

const tempStart = (path) => `Property '${path.join('.')}' `;
//  templates map
const templates = {
  remove: (path) => `${tempStart(path)}was removed`,
  add: (path, value) => `${tempStart(path)}was added with value: ${valueCheck(value)}`,
  update: (path, value) => `${tempStart(path)}was updated. From ${valueCheck(value[0])} to ${valueCheck(value[1])}`,
};
//  plain formater (typeTree, path*)
const strigifyPlain = (tree, path = []) => tree.filter((node) => node.type !== 'sim')
  .map((node) => {
    const { type } = node;
    const newPath = [...path, node.name];// path resolve

    const value = has(node, 'before') ? [node.before, node.after] : node.value;

    return (has(node, 'children') ? strigifyPlain(node.children, newPath)
      : templates[type](newPath, value));
  }).join(EOL);

module.exports = strigifyPlain;
