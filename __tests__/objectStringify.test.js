const { test, expect } = require('@jest/globals');
const { obj1, obj3 } = require('../__fixtures__/test-objects');
const { readFile } = require('../__fixtures__/test-functions');
//  testing function
const stringifyObj = require('../modules/stringifyObj');

test('test flat', () => {
  expect((stringifyObj(obj3))).toBe(readFile('stringify.txt'));
});
test('test deep', () => {
  expect((stringifyObj(obj1))).toBe(readFile('stringifyDeep.txt'));
});
