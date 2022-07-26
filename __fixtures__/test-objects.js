const { readFile } = require('./test-functions');

const obj1 = {
  common: {
    setting1: "Value 1",
    setting2: 200,
    setting3: true,
    setting6: {
      key: "value",
      doge: {
        wow: ""
      }
    }
  },
  group1: {
    baz: "bas",
    foo: "bar",
    nest: {
      key: "value"
    }
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45
    }
  }
};
const obj2 = {
  common: {
    follow: false,
    setting1: "Value 1",
    setting3: null,
    setting4: "blah blah",
    setting5: {
      key5: "value5"
    },
    setting6: {
      key: "value",
      ops: "vops",
      doge: {
        wow: "so much"
      }
    }
  },
  group1: {
    foo: "bar",
    baz: "bars",
    nest: "str"
  },
  group3: {
    deep: {
      id: {
        number: 45
      }
    },
    fee: 100500
  }
};

const obj3 = {
  host: "hexlet.io",
  timeout: 50,
  proxy: "123.234.53.22",
  follow: false
};
const obj4 = {
  timeout: 20,
  verbose: true,
  host: "hexlet.io"
}

module.exports = {
  obj1,
  obj2,
  obj3,
  obj4
};
