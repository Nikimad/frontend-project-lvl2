import getKeys from '../modules/getKeys';
import getNode from './getNode';

const getTree = (obj1, obj2) => {
  const keys = getKeys(obj1, obj2);

  const tree = keys.map((key) => getNode(obj1, obj2, key));
  /*
  tree [node{},
     *node{
        children: [node{}, ...]
      }
    ]
  */
  return tree;
};

export default getTree;
