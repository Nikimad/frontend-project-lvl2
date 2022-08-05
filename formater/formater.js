import stylish from './formaters/stylish-formater';
import plain from './formaters/plain-formater';
import json from './formaters/json-formater';

const formater = {
  stylish: (tree) => stylish(tree),
  plain: (tree) => plain(tree),
  json: (tree) => json(tree),
};

export default formater;
