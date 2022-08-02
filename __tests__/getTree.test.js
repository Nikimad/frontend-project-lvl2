const { test, expect } = require('@jest/globals');
const {
  obj1, obj2, obj3, obj4,
} = require('../__fixtures__/test-objects');
const {
  flat,
  nested,
} = require('../__fixtures__/test-trees');
//  test function
const getTree = require('../typer/getTree');
//  test
test('basic case', () => {
  expect(getTree(obj3, obj4)).toEqual(flat);
});
test('case with nested structure', () => {
  expect(getTree(obj1, obj2)).toEqual(nested);
});
