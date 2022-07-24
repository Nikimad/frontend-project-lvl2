const { cwd } = require('process');
const fs = require('fs');
const { resolve } = require('path');

function getData(filepath) {
  const dataString = fs.readFileSync(resolve(cwd(), filepath), 'utf-8');

  const dataObj = JSON.parse(dataString);

  return dataObj;
}

module.exports = getData;
