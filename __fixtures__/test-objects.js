const { readFile } = require('./test-functions');

const obj1 = {
  host: "hexlet.io",
  timeout: 50,
  proxy: "123.234.53.22",
  follow: false
};
const obj2 = {
  timeout: 20,
  verbose: true,
  host: "hexlet.io"
}

module.exports = {
  obj1,
  obj2,
};
