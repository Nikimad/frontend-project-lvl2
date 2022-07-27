const { test, expect } = require('@jest/globals');
const {
  obj1, obj2, obj3, obj4,
} = require('../__fixtures__/test-objects');
const { flat, nested } = require('../__fixtures__/test-typeTrees');
const { readFile } = require('../__fixtures__/test-functions');
//  test function
const strigifyStylish = require('../formater/stylish-formater');

const flatText = readFile('diff1.txt');
const nestedText = readFile('diff2.txt');

test('stylish for flat files', () => {
  expect(strigifyStylish(obj3, obj4, flat)).toBe(flatText);
});
test('stylish for nested files', () => {
  expect(strigifyStylish(obj1, obj2, nested)).toBe(nestedText);
});
