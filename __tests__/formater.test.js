const { test, expect } = require('@jest/globals');
const { readFile } = require('../__fixtures__/test-functions');
//  trees
const { flat, nested } = require('../__fixtures__/test-trees');
//  outputs
const output = {
  plain: {
    flat: readFile('diff-outputs/plain-flat.txt'),
    nested: readFile('diff-outputs/plain-nested.txt'),
  },
  stylish: {
    flat: readFile('diff-outputs/stylish-flat.txt'),
    nested: readFile('diff-outputs/stylish-nested.txt'),
  },
  json: {
    flat: readFile('diff-outputs/json-flat.txt'),
    nested: readFile('diff-outputs/json-nested.txt'),
  },
};
//  formater func
const formater = require('../formater/formater');
//  formats
const formats = ['plain', 'stylish', 'json'];
// Tests
test('flat cases', () => {
  formats.forEach((format) => {
    expect((formater[format](flat))).toBe(output[format].flat);
  });
});
test('nested cases', () => {
  formats.forEach((format) => {
    expect((formater[format](nested))).toBe(output[format].nested);
  });
});
