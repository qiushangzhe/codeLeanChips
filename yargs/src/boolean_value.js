let yargs = require('yargs');
yargs = yargs.boolean('isdone');
console.log(yargs.argv);


/*
执行：
  node boolean_value.js
输出：
  { _: [],
  help: false,
  version: false,
  isdone: false,
  '$0': 'boolean_value.js' }
解释：
    默认是false
*/

/*
执行：
  node boolean_value.js --isdone=true  或者 node boolean_value.js --isdone
输出：
  { _: [],
  help: false,
  version: false,
  isdone: true,
  '$0': 'boolean_value.js' }
*/

/*
执行：
  node boolean_value.js --isdone=123124 
输出：
  { _: [],
  help: false,
  version: false,
  isdone: false,
  '$0': 'boolean_value.js' }
解释：
    赋值其他类型的都会认为是false
*/