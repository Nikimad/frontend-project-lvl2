import { test, expect } from '@jest/globals';
import { obj3, obj4 } from '../__fixtures__/test-objects.js';
//  func
import getKeys from '../modules/getKeys.js';
//  expected result
const sortedUniqueKeys = ['follow', 'host', 'proxy', 'timeout', 'verbose'];
//  test
test('sorted unique keys arr', () => {
  expect(getKeys(obj3, obj4)).toEqual(sortedUniqueKeys);
});
