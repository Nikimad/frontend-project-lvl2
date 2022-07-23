const { test, expect } = require('@jest/globals');
const getAnswer = require('../modules/getAnswer');

test('get answer', () => {
  expect(getAnswer('gen', 'key', 'value')).toBe('\n    key: value');
  expect(getAnswer('fprop', 'key', 'value')).toBe('\n  - key: value');
  expect(getAnswer('sprop', 'key', 'value')).toBe('\n  + key: value');
});
