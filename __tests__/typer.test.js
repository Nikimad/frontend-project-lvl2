const { test, expect } = require('@jest/globals');
const {
  obj1, obj2, obj3, obj4,
} = require('../__fixtures__/test-objects');
const { flat, nested } = require('../__fixtures__/test-typeTrees');
//  function for testing
const getTypeTree = require('../typer/typer');

test('get type tree flat', () => {
  expect(getTypeTree(obj3, obj4)).toEqual(flat);
});
test('get type tree nested', () => {
  expect(getTypeTree(obj1, obj2)).toEqual(nested);
});
