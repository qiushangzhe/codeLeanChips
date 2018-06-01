const yargs = require('yargs');
console.log(yargs.argv._);
console.log(yargs.argv.$0);
// 控制台输入
// node arguments.js qiu shang zhe
// 输出结果
// [ 'qiu', 'shang', 'zhe' ]
// argument.js

// "_" 对象是输出参数的数组，以空格分割
// "$0 是当前的文件名称"