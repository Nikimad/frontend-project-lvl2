const { test, expect } = require('@jest/globals');
const { obj1, obj2 } = require('../__fixtures__/test-objects');
//  function for testing
const getTypeTree = require('../typer/typer');

const expectValue = {
  common: {
    follow: 'add',
    setting1: 'sim',
    setting2: 'remove',
    setting3: 'update',
    setting4: 'add',
    setting5: 'add',
    setting6: {
      doge: {
        wow: 'update',
      },
      key: 'sim',
      ops: 'add',
    },
  },
  group1: {
    baz: 'update',
    foo: 'sim',
    nest: 'update',
  },
  group2: 'remove',
  group3: 'add',
};

test('get typer tree', () => {
  expect(getTypeTree(obj1, obj2)).toEqual(expectValue);
});
