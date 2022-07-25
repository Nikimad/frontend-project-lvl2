const { test, expect } = require('@jest/globals');
const { getFixturePath } = require('../__fixtures__/test-functions');
const { obj1, obj2 } = require('../__fixtures__/test-objects');
//  function for testing
const getParsedFileData = require('../parser/parser');

test('test JSON parse', () => {
    expect(getParsedFileData(getFixturePath('file1.json'))).toEqual(obj1);
    expect(getParsedFileData(getFixturePath('file2.json'))).toEqual(obj2);
});
test('test YAML parse whith .yml ext', () => {
    expect(getParsedFileData(getFixturePath('file1.yml'))).toEqual(obj1);
});
test('test YAML parse whith .yaml ext', () => {
    expect(getParsedFileData(getFixturePath('file2.yaml'))).toEqual(obj2);
});