const stylish = require('./stylish-formater');
const plain = require('./plain-formater');

const formater = {
  stylish: (obj1, obj2, tree) => stylish(obj1, obj2, tree),
  plain: (tree) => plain(tree),
};

module.exports = formater;
