const { readFile } = require('./test-functions');

const obj1 = JSON.parse(readFile('file1.json'))
const obj2 = JSON.parse(readFile('file2.json'));

module.exports = {
    obj1,
    obj2
}