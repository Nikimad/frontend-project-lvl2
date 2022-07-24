const fs = require('fs');
const path = require('path');

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

module.exports = {
  readFile,
  getFixturePath,
};
