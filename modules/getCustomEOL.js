const { EOL } = require('node:os');

const indent = ' ';
const getCustomEOL = (indentRep) => `${EOL}${indent.repeat(indentRep)}`;

module.exports = getCustomEOL;
