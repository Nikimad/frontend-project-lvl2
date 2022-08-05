import _ from 'lodash';

function getKeys(o1, o2) {
  //  get all keys and sort it
  const sortedKeys = _.sortBy([o1, o2].flatMap((obj) => _.keys(obj)));
  //  get unique keys
  return _.sortedUniq(sortedKeys);
}

export default getKeys;
