import { test, expect } from '@jest/globals';
import { readFileSync as readFile } from 'fs';
import { obj1, obj3 } from '../__fixtures__/test-objects';
//  func
import stringifyObj from '../modules/stringifyObj';
//  output
const flat = readFile('./__fixtures__/txt/flat.txt', 'utf-8');
const nested = readFile('./__fixtures__/txt/nested.txt', 'utf-8');
// test
test('flat', () => {
  expect((stringifyObj(obj3))).toBe(flat);
});
test('deep', () => {
  expect((stringifyObj(obj1))).toBe(nested);
});
