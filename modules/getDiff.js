const { EOL } = require('node:os');
const getParsedFileData = require('../parser/parser');
const getKeys = require('./getKeys');
const compareByKey = require('./compareByKey');

function getDiff(filepath1, filepath2) {
  const [obj1, obj2] = [getParsedFileData(filepath1), getParsedFileData(filepath2)];
  const keys = getKeys(obj1, obj2);

  const diff = keys.map((key) => compareByKey(obj1, obj2, key)).join('');

  return `{${diff}${EOL}}`;
}

module.exports = getDiff;
