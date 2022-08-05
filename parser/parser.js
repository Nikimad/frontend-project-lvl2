//  default lib
import { cwd } from 'process';
import { resolve, extname } from 'path';
import fs from 'fs';
//  YAML lib
import YAML from 'js-yaml';
//  path-resolver
const getResolvedPath = (filepath) => resolve(cwd(), filepath);
//  parsers
const YAMLparser = (data) => YAML.load(data);
const JSONparser = (data) => JSON.parse(data);
//  map
const parsers = {
  '.yaml': (data) => YAMLparser(data),
  '.yml': (data) => YAMLparser(data),
  '.json': (data) => JSONparser(data),
};
// get data
const getData = (filepath) => {
  const resolvedPath = getResolvedPath(filepath);

  return fs.readFileSync(resolvedPath, 'utf-8');
};
// get parsed file data
const getParsedFileData = (filepath) => {
  //  get file data and .extension
  const ext = extname(filepath);
  const data = getData(filepath);
  //  parse
  const parsedFileData = parsers[ext](data);

  return parsedFileData;
};

export default getParsedFileData;
