const flat = [
    { name: 'follow', type: 'remove', value: false },
    { name: 'host', type: 'sim', value: 'hexlet.io' },
    { name: 'proxy', type: 'remove', value: '123.234.53.22' },
    { name: 'timeout', type: 'update', before: 50, after: 20 },
    { name: 'verbose', type: 'add', value: true }
];
const nested = [
    { name: 'common', type: 'nested', children: [
        { name: 'follow', type: 'add', value: false },
        { name: 'setting1', type: 'sim', value: 'Value 1' },
        { name: 'setting2', type: 'remove', value: 200 },
        { name: 'setting3', type: 'update', before: true, after: null},
        { name: 'setting4', type: 'add', value: 'blah blah' },
        { name: 'setting5', type: 'add', value: { key5: 'value5' } },
        { name: 'setting6', type: 'nested', children: [
            { name: 'doge', type: 'nested', children: [
                { name: 'wow', type: 'update', before: '', after: 'so much' }
            ]},
            { name: 'key', type: 'sim', value: 'value'},
            { name: 'ops', type: 'add', value: 'vops'}
        ]}
    ]},
    { name: 'group1', type: 'nested', children: [
        { name: 'baz', type: 'update', before: 'bas', after: 'bars' },
        { name: 'foo', type: 'sim', value: 'bar' },
        { name: 'nest', type: 'update', before: { key: 'value' }, after: 'str' },
        ],
    },
    { name: 'group2', type: 'remove', value: {
        abc: 12345,
        deep: {
          id: 45,
        },
      }},
    { name: 'group3', type: 'add', value: {
        deep: {
          id: {
            number: 45,
          },
        },
        fee: 100500,
      }
    }
];

module.exports = {
    flat,
    nested
}