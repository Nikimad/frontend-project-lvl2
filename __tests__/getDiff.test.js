const { test, expect } = require('@jest/globals');
const { readFile, getFixturePath } = require('../__fixtures__/test-functions');
const getDiff = require('../modules/getDiff');

const result = readFile('diff.txt');

test('get diff JSON', () => {
  expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(result);
});
test('get diff YAML', () => {
  expect(getDiff(getFixturePath('file1.yml'), getFixturePath('file2.yaml'))).toBe(result);
});
