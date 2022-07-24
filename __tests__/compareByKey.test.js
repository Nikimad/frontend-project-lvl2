const { test, expect } = require('@jest/globals');
const compareByKey = require('../modules/compareByKey');
const { obj1, obj2 } = require('../__fixtures__/test-objects');

test('compare by key test', () => {
  expect(compareByKey(obj1, obj2, 'host')).toBe('\r\n    host: hexlet.io');
  expect(compareByKey(obj1, obj2, 'proxy')).toBe('\r\n  - proxy: 123.234.53.22');
  expect(compareByKey(obj1, obj2, 'verbose')).toBe('\r\n  + verbose: true');
  expect(compareByKey(obj1, obj2, 'timeout')).toBe('\r\n  - timeout: 50\r\n  + timeout: 20');
});
