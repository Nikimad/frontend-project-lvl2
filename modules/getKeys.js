const { keys, sortBy, sortedUniq } = require('lodash');

function getKeys(o1, o2) {
  //  get all keys and sort it
  const sortedKeys = sortBy([o1, o2].flatMap((obj) => keys(obj)));
  //  get unique keys
  return sortedUniq(sortedKeys);
}

module.exports = getKeys;
