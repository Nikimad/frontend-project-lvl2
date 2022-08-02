//  modules
const parser = require('../parser/parser');
const getTree = require('../typer/getTree');
const formater = require('../formater/formater');
//  main func
module.exports = (filepath1, filepath2, format) => {
  //  parse files formats: [.json , .yml/.yaml]
  const [o1, o2] = [parser(filepath1), parser(filepath2)];
  //  get data tree [node{}, node{}, ...]
  const data = getTree(o1, o2);
  //  format data formats: [plain, stylish, json]
  const result = formater[format](data);
  //  show result
  console.log(result);
};
