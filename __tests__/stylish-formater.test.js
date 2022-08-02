const { test, expect } = require('@jest/globals');
const { flat, nested } = require('../__fixtures__/newType-trees');
const { readFile } = require('../__fixtures__/test-functions');
//  test function
const strigifyStylish = require('../formater/stylish-formater');

const flatText = readFile('diff1.txt');
const nestedText = readFile('diff2.txt');

test('stylish for flat files', () => {
  expect(strigifyStylish(flat)).toBe(flatText);
});
test('stylish for nested files', () => {
  expect(strigifyStylish(nested)).toBe(nestedText);
});
