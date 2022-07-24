const { readFile, getFixturePath } = require('../__fixtures__/test-functions');
const getDiff = require('../modules/getDiff');

const result = readFile('diff.txt');

test('get diff', () => {
    expect(getDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(result);
});
