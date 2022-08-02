const { test, expect } = require('@jest/globals');
const { obj1, obj3 } = require('../__fixtures__/test-objects');
const { readFile } = require('../__fixtures__/test-functions');
//  func
const stringifyObj = require('../modules/stringifyObj');
//  output
const flat = readFile('txt/flat.txt');
const nested = readFile('txt/nested.txt');
// test
test('test flat', () => {
  expect((stringifyObj(obj3))).toBe(flat);
});
test('test deep', () => {
  expect((stringifyObj(obj1))).toBe(nested);
});
