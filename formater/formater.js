import stylish from './formaters/stylish-formater.js';
import plain from './formaters/plain-formater.js';
import json from './formaters/json-formater.js';

const formater = {
  stylish: (tree) => stylish(tree),
  plain: (tree) => plain(tree),
  json: (tree) => json(tree),
};

export default formater;
