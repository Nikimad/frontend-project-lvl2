const getKeys = require('../modules/getKeys');

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

const sortedUniqueKeys = ['follow', 'host', 'proxy', 'timeout', 'verbose'];

test('sorted unique keys arr', () => {
    expect(getKeys(obj1, obj2)).toEqual(sortedUniqueKeys);
});