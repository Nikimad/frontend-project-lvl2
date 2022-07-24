const { test, expect } = require('@jest/globals');
const { obj1, obj2 } = require('../__fixtures__/test-objects');
const getKeys = require('../modules/getKeys');

const sortedUniqueKeys = ['follow', 'host', 'proxy', 'timeout', 'verbose'];

test('sorted unique keys arr', () => {
  expect(getKeys(obj1, obj2)).toEqual(sortedUniqueKeys);
});
