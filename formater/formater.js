const stylish = require('./stylish-formater');
const plain = require('./plain-formater');

const formater = {
  stylish: (tree) => stylish(tree),
  plain: (tree) => plain(tree),
};

module.exports = formater;
