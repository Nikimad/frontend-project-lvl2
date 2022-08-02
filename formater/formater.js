const stylish = require('./stylish-formater');
const plain = require('./plain-formater');
const json = require('./json-formater');

const formater = {
  stylish: (tree) => stylish(tree),
  plain: (tree) => plain(tree),
  json: (tree) => json(tree)
};

module.exports = formater;
