const { EOL } = require('node:os');
const { test, expect } = require('@jest/globals');
const compareByKey = require('../modules/compareByKey');
const { obj1, obj2 } = require('../__fixtures__/test-objects');

test('compare by key test', () => {
  expect(compareByKey(obj1, obj2, 'host')).toBe(`${EOL}    host: hexlet.io`);
  expect(compareByKey(obj1, obj2, 'proxy')).toBe(`${EOL}  - proxy: 123.234.53.22`);
  expect(compareByKey(obj1, obj2, 'verbose')).toBe(`${EOL}  + verbose: true`);
  expect(compareByKey(obj1, obj2, 'timeout')).toBe(`${EOL}  - timeout: 50${EOL}  + timeout: 20`);
});
