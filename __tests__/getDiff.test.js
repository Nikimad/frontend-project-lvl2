const { test, expect } = require('@jest/globals');
const { readFile, getFixturePath } = require('../__fixtures__/test-functions');
const getDiff = require('../modules/getDiff');

const result = readFile('diff1.txt');

test('get diff JSON', () => {
  expect(getDiff(getFixturePath('file3.json'), getFixturePath('file4.json'))).toBe(result);
});
test('get diff YAML', () => {
  expect(getDiff(getFixturePath('file3.yml'), getFixturePath('file4.yaml'))).toBe(result);
});
