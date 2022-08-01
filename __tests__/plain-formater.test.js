const { test, expect } = require('@jest/globals');
const { flat, nested } = require('../__fixtures__/newType-trees');
const { readFile } = require('../__fixtures__/test-functions');
//  test function
const strigifyPlain = require('../formater/plain-formater');

const flatTxt = readFile('diff1Plain.txt');
const nestedTxt = readFile('diff2Plain.txt');

test('for flat files', () => {
  expect(strigifyPlain(flat)).toBe(flatTxt);
});
test('for nested files', () => {
  expect(strigifyPlain(nested)).toBe(nestedTxt);
});
