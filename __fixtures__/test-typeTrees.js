const flat = {
  follow: 'remove',
  host: 'sim',
  proxy: 'remove',
  timeout: 'update',
  verbose: 'add',
};
const nested = {
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

module.exports = {
  flat,
  nested,
};
