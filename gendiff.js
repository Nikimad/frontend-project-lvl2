const { Command } = require('commander');
const getParsedFileData = require('./parser/parser');
//  main action
const getDiff = require('./src/index');

const program = new Command();



program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action(getDiff);

program.parse();
