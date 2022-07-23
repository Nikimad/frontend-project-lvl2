const { cwd } = require('process');
const { resolve } = require('path');

function resolvePath(filepath) {
  return resolve(cwd(), filepath);
}

module.exports = resolvePath;
