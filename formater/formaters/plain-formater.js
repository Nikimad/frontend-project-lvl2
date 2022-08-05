import { EOL } from 'node:os';
import _ from 'lodash';

const valueCheck = (v) => {
  if (_.isObject(v)) {
    return '[complex value]';
  }
  return _.isString(v) ? `'${v}'` : v;
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

    const value = _.has(node, 'before') ? [node.before, node.after] : node.value;

    return (_.has(node, 'children') ? strigifyPlain(node.children, newPath)
      : templates[type](newPath, value));
  }).join(EOL);

export default strigifyPlain;
