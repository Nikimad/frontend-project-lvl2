import _ from 'lodash';
import getCustomEOL from '../../modules/getCustomEOL.js';
import strigifyObj from '../../modules/stringifyObj.js';
//  prefixes
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
const getTemplate = (key, value, prefix, indentRep) => (!_.isObject(value) ? stylishTemplates.flat
  : stylishTemplates.nested)(key, value, prefixes[prefix], indentRep);

//  Stylish formater
const strigifyStylish = (tree, indentRep = 4) => {
  // Type Map
  const typeMap = {
    sim: (key, value, rep) => getTemplate(key, value, 'sim', rep - 2),
    remove: (key, value, rep) => getTemplate(key, value, 'remove', rep - 2),
    add: (key, value, rep) => getTemplate(key, value, 'add', rep - 2),
    update: (key, value, rep) => `${getTemplate(key, value[0], 'remove', rep - 2)}${getTemplate(key, value[1], 'add', rep - 2)}`,
    nested: (key, children, rep) => `${getCustomEOL(rep)}${key}: ${strigifyStylish(children, rep + 4)}`,
  };
  //  get result string
  const string = tree.map((node) => {
    const { name, type } = node;
    const value = _.has(node, 'before') ? [node.before, node.after] : node.value;
    return (_.has(node, 'children') ? typeMap[type](name, node.children, indentRep)
      : typeMap[type](name, value, indentRep));
  }, []).join('');
  return `{${string}${getCustomEOL(indentRep - 4)}}`;
};

export default strigifyStylish;
