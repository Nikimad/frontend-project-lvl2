import { test, expect } from '@jest/globals';
import { obj3, obj4 } from '../__fixtures__/test-objects';
//  func
import getParsedFileData from '../parser/parser';
//  test
test('JSON parse', () => {
  expect(getParsedFileData('./__fixtures__/file3.json')).toEqual(obj3);
  expect(getParsedFileData('./__fixtures__/file4.json')).toEqual(obj4);
});
test('YAML parse whith .yml ext', () => {
  expect(getParsedFileData('./__fixtures__/file3.yml')).toEqual(obj3);
});
test('YAML parse whith .yaml ext', () => {
  expect(getParsedFileData('./__fixtures__/file4.yaml')).toEqual(obj4);
});
