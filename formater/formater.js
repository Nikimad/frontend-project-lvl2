const stylish = require('./stylish-formater');

const formater = {
  stylish: (obj1, obj2, tree, indentRep) => stylish(obj1, obj2, tree, indentRep),
  plain: () => console.log('later'),
};

module.exports = formater;
