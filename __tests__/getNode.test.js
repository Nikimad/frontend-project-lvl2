const { test, expect } = require('@jest/globals');
const {
  obj1, obj2, obj3, obj4,
} = require('../__fixtures__/test-objects');
//  test function
const getNode = require('../typer/getNode');

const keyHostNodeTypeSim = { name: 'host', type: 'sim', value: 'hexlet.io' };
const keyProxyNodeTypeRemove = { name: 'proxy', type: 'remove', value: '123.234.53.22' };
const keyVerboseNodeTypeAdd = { name: 'verbose', type: 'add', value: true };
const keyTimeoutNodeTypeUpdate = {
  name: 'timeout', type: 'update', before: 50, after: 20,
};
const keyGroup1NodeTypeNested = {
  name: 'group1',
  type: 'nested',
  children: [
    {
      name: 'baz', type: 'update', before: 'bas', after: 'bars',
    },
    { name: 'foo', type: 'sim', value: 'bar' },
    {
      name: 'nest', type: 'update', before: { key: 'value' }, after: 'str',
    },
  ],
};

test('basic cases', () => {
  expect(getNode(obj3, obj4, 'host')).toEqual(keyHostNodeTypeSim);//  sim value
  expect(getNode(obj3, obj4, 'proxy')).toEqual(keyProxyNodeTypeRemove);// remove value
  expect(getNode(obj3, obj4, 'verbose')).toEqual(keyVerboseNodeTypeAdd);//    add value
  expect(getNode(obj3, obj4, 'timeout')).toEqual(keyTimeoutNodeTypeUpdate);// update value
});
test('nested case', () => {
  expect(getNode(obj1, obj2, 'group1')).toEqual(keyGroup1NodeTypeNested);// nested + go deep
});
