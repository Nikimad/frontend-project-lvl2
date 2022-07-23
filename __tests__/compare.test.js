const { test, expect } = require('@jest/globals');
const compare = require('../modules/compare');

const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

test('compare test', () => {
  expect(compare(obj1, obj2, 'host')).toBe('\n    host: hexlet.io');
  expect(compare(obj1, obj2, 'proxy')).toBe('\n  - proxy: 123.234.53.22');
  expect(compare(obj1, obj2, 'verbose')).toBe('\n  + verbose: true');
  expect(compare(obj1, obj2, 'timeout')).toBe('\n  - timeout: 50\n  + timeout: 20');
});
