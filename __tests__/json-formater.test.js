const { test, expect } = require('@jest/globals');
const { flat, nested } = require('../__fixtures__/newType-trees');
const { readFile } = require('../__fixtures__/test-functions');
//  test function
const strigifyJson = require('../formater/json-formater');

const flatTxt = readFile('diff1json.txt');
const nestedTxt = readFile('diff2json.txt');

test('flat', () => {
    expect(strigifyJson(flat)).toBe(flatTxt);
});
test('nested', () => {
    expect(strigifyJson(nested)).toBe(nestedTxt);
});