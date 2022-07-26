const { test, expect } = require('@jest/globals');
const { obj3, obj4 } = require('../__fixtures__/test-objects');
const getKeys = require('../modules/getKeys');

const sortedUniqueKeys = ['follow', 'host', 'proxy', 'timeout', 'verbose'];

test('sorted unique keys arr', () => {
  expect(getKeys(obj3, obj4)).toEqual(sortedUniqueKeys);
});
