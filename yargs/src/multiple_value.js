let yargs = require('yargs');
yargs = yargs.array('names');
console.log(yargs.argv);


/*
执行：
  node multiple_value.js --names=people1 people2 people3
输出：
  {
    _: [],
    help: false,
    version: false,
    names: [ 'people1', 'people2', 'people3' ],
    '$0': 'multiple_value.js' 
  }
*/