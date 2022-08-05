import { EOL } from 'node:os';

const indent = ' ';
const getCustomEOL = (indentRep) => `${EOL}${indent.repeat(indentRep)}`;

export default getCustomEOL;
