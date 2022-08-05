import { test, expect } from '@jest/globals';
import { readFileSync as readFile } from 'fs';
//  trees
import { flat, nested } from '../__fixtures__/test-trees';
//  formater func
import formater from '../formater/formater';
//  outputs
const output = {
  plain: {
    flat: readFile('./__fixtures__/diff-outputs/plain-flat.txt', 'utf-8'),
    nested: readFile('./__fixtures__/diff-outputs/plain-nested.txt', 'utf-8'),
  },
  stylish: {
    flat: readFile('./__fixtures__/diff-outputs/stylish-flat.txt', 'utf-8'),
    nested: readFile('./__fixtures__/diff-outputs/stylish-nested.txt', 'utf-8'),
  },
  json: {
    flat: readFile('./__fixtures__/diff-outputs/json-flat.txt', 'utf-8'),
    nested: readFile('./__fixtures__/diff-outputs/json-nested.txt', 'utf-8'),
  },
};
//  formats
const formats = ['plain', 'stylish', 'json'];
// Tests
test('formater test', () => {
  formats.forEach((format) => {
    expect((formater[format](flat))).toBe(output[format].flat);
    expect((formater[format](nested))).toBe(output[format].nested);
  });
});
