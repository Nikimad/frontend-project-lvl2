import { test, expect } from '@jest/globals';
import {
  obj1, obj2, obj3, obj4,
} from '../__fixtures__/test-objects.js';
import {
  flat,
  nested,
} from '../__fixtures__/test-trees.js';
//  test function
import getTree from '../typer/getTree.js';
//  test
test('basic case', () => {
  expect(getTree(obj3, obj4)).toEqual(flat);
});
test('case with nested structure', () => {
  expect(getTree(obj1, obj2)).toEqual(nested);
});
