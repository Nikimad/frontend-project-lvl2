const { test, expect } = require('@jest/globals');
const { getFixturePath } = require('../__fixtures__/test-functions');
const { obj1, obj2 } = require('../__fixtures__/test-objects');
const getData = require('../modules/getData');

test('data received in obj', () => {
  expect(typeof getData(getFixturePath('file1.json'))).toBe('object');
});
test('data received', () => {
  expect(getData(getFixturePath('file1.json'))).toEqual(obj1);
  expect(getData(getFixturePath('file2.json'))).toEqual(obj2);
});
