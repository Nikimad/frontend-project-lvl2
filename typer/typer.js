const { has, isObject } = require('lodash');
const getKeys = require('../modules/getKeys');

const getTypeTree = (obj1, obj2) => {
    const keys = getKeys(obj1, obj2);

    return keys.reduce((tree, key) => {
        if (isObject(obj1[key]) && isObject(obj2[key])) {
            tree[key] = getTypeTree(obj1[key], obj2[key]);
        } else if (obj1[key] === obj2[key]) {
            tree[key] ='sim';
        } else {
            let type;
            if (has(obj1, key)) {
                type = 'remove';
            }
            if (has(obj2, key)) {
                type = type === 'remove' ? 'update' : 'add';
            }
            tree[key] = type;
        }
        return tree;
    }, {});
};

/*
    keys.forEach((key) => {
        if (isObject(obj1[key]) && isObject(obj2[key])) {
            tree[key] = getTypeTree(obj1[key], obj2[key]);
        } else if (obj1[key] === obj2[key]) {
            tree[key] ='sim';
        } else {
            let type;
            if (has(obj1, key)) {
                type = 'remove';
            }
            if (has(obj2, key)) {
                type = type === 'remove' ? 'update' : 'add';
            }
            tree[key] = type;
        }
    });
    return tree;
*/

module.exports = getTypeTree;