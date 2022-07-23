const fs = require('fs');
const resolvePath = require('./resolvePath');

function getData(filepath) {
  const dataString = fs.readFileSync(resolvePath(filepath), 'utf-8');

  const dataObj = JSON.parse(dataString);

  return dataObj;
}

module.exports = getData;
