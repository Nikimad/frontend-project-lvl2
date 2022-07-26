const { test, expect } = require('@jest/globals');
const { obj1, obj3 } = require('../__fixtures__/test-objects');
const { readFile } = require('../__fixtures__/test-functions');
//  testing function
const objectStrigify = require('../modules/objectStringify');

test('test flat', () => {
    expect((objectStrigify(obj3))).toBe(readFile('stringify.txt'))
});
test('test deep', () => {
    expect((objectStrigify(obj1))).toBe(readFile('stringifyDeep.txt'))
});