const stylish = require('./formaters/stylish-formater');
const plain = require('./formaters/plain-formater');
const json = require('./formaters/json-formater');

const formater = {
  stylish: (tree) => stylish(tree),
  plain: (tree) => plain(tree),
  json: (tree) => json(tree),
};

module.exports = formater;
