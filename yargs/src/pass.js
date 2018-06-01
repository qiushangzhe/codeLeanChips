const result = require('yargs')(['-x', '1', '-y', '2']).argv
const result2 = require('yargs').parse(['-x', '1', '-y', '2'])
console.log(result);
console.log(result2);

// 执行node pass.js --name=qiushangzhe
// 两个输出都是
/*
  { 
    _: [],
    help: false,
    version: false,
    x: 1,
    y: 2,
    '$0': 'pass.js'
  }
*/