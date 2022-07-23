const getData = require('../modules/getData');

const filePath1 = '__fixtures__/file1.json';
const filePath2 = '__fixtures__/file2.json';

const obj1 = {
    host: "hexlet.io",
    timeout: 50,
    proxy: "123.234.53.22",
    follow: false
};
const obj2 = {
    timeout: 20,
    verbose: true,
    host: "hexlet.io"
}

test('data received in obj', () => {
    expect(typeof getData(filePath1)).toBe('object');
});
test('data received', () => {
    expect(getData(filePath1)).toEqual(obj1);
    expect(getData(filePath2)).toEqual(obj2);
});