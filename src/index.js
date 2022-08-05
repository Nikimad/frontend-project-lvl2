//  modules
import parser from '../parser/parser.js';
import getTree from '../typer/getTree.js';
import formater from '../formater/formater.js';
//  main func
export default (filepath1, filepath2, format = 'stylish') => {
  //  parse files formats: [.json , .yml/.yaml]
  const [o1, o2] = [parser(filepath1), parser(filepath2)];
  //  get data tree [node{}, node{}, ...]
  const data = getTree(o1, o2);
  //  format data formats: [plain, stylish, json]
  const result = formater[format](data);
  //  show result
  console.log(result);
  return result;
};
