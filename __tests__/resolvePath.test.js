const { cwd } = require('process');
const resolvePath = require('../modules/resolvePath');

const workingDirectory = cwd();

const path1 = '__fixtures__/file.json';
const path2 = 'modules/file.js';

const resolvedPath1 = workingDirectory.concat('\\__fixtures__\\file.json');
const resolvedPath2 = workingDirectory.concat('\\modules\\file.js');

test('path resolved', () => {
    expect(resolvePath(path1)).toBe(resolvedPath1);
    expect(resolvePath(path2)).toBe(resolvedPath2)
});