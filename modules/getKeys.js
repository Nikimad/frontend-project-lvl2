const { keys } = require('lodash');

function getKeys(...objects) {
  //  get all keys
  const keysArr = objects.reduce((acc, obj) => {
    acc.push(...keys(obj));

    return acc;
  }, []);
  //  get unique keys
  const keysSet = Array.from(new Set(keysArr));

  const sortedKeys = keysSet.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));

  return sortedKeys;
}

module.exports = getKeys;
