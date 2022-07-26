const { EOL } = require('node:os');
const { test, expect } = require('@jest/globals');
const compareByKey = require('../modules/compareByKey');
const { obj3, obj4 } = require('../__fixtures__/test-objects');

test('compare by key test', () => {
  expect(compareByKey(obj3, obj4, 'host')).toBe(`${EOL}    host: hexlet.io`);
  expect(compareByKey(obj3, obj4, 'proxy')).toBe(`${EOL}  - proxy: 123.234.53.22`);
  expect(compareByKey(obj3, obj4, 'verbose')).toBe(`${EOL}  + verbose: true`);
  expect(compareByKey(obj3, obj4, 'timeout')).toBe(`${EOL}  - timeout: 50${EOL}  + timeout: 20`);
});
