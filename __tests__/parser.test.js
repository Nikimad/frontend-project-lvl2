const { test, expect } = require('@jest/globals');
const { getFixturePath } = require('../__fixtures__/test-functions');
const { obj3, obj4 } = require('../__fixtures__/test-objects');
//  function for testing
const getParsedFileData = require('../parser/parser');

test('test JSON parse', () => {
    expect(getParsedFileData(getFixturePath('file3.json'))).toEqual(obj3);
    expect(getParsedFileData(getFixturePath('file4.json'))).toEqual(obj4);
});
test('test YAML parse whith .yml ext', () => {
    expect(getParsedFileData(getFixturePath('file3.yml'))).toEqual(obj3);
});
test('test YAML parse whith .yaml ext', () => {
    expect(getParsedFileData(getFixturePath('file4.yaml'))).toEqual(obj4);
});