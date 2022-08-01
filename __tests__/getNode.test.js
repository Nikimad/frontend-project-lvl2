const { test, expect } = require('@jest/globals');
const {
  obj1, obj2, obj3, obj4,
} = require('../__fixtures__/test-objects');
const {
  flat,
  nested,
} = require('../__fixtures__/newType-trees');
//  test function
const getNode = require('../typer/getNode');

const keyHostNodeTypeSim = flat[1];
const keyProxyNodeTypeRemove = flat[2];
const keyVerboseNodeTypeAdd = flat[4];
const keyTimeoutNodeTypeUpdate = flat[3];
const keyGroup1NodeTypeNested = nested[1];

test('basic cases', () => {
  expect(getNode(obj3, obj4, 'host')).toEqual(keyHostNodeTypeSim);//  sim value
  expect(getNode(obj3, obj4, 'proxy')).toEqual(keyProxyNodeTypeRemove);// remove value
  expect(getNode(obj3, obj4, 'verbose')).toEqual(keyVerboseNodeTypeAdd);//    add value
  expect(getNode(obj3, obj4, 'timeout')).toEqual(keyTimeoutNodeTypeUpdate);// update value
});
test('nested case', () => {
  expect(getNode(obj1, obj2, 'group1')).toEqual(keyGroup1NodeTypeNested);// nested + go deep
});
