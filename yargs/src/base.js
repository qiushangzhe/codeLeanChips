const result = require('yargs').argv;
const result2 = require('yargs').parse();
console.log(result);
console.log(result2);
// 执行 node base.js --name=qiushangzhe

// 两个都是输出：
/*
  { 
    _: [],
    help: false,
    version: false,
    name: 'qiushangzhe',
    '$0': 'base.js'
  }
*/