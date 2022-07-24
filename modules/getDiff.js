const { EOL } = require('node:os');
const getData = require('./getData');
const getKeys = require('./getKeys');
const compareByKey = require('./compareByKey');

function getDiff(filepath1, filepath2) {
  const [obj1, obj2] = [getData(filepath1), getData(filepath2)];
  const keys = getKeys(obj1, obj2);

  const diff = keys.map((key) => compareByKey(obj1, obj2, key)).join('');

  return `{${diff}${EOL}}`;
}

module.exports = getDiff;
