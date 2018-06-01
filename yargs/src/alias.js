const yargs = require('yargs');
console.log(yargs.alias('n', 'name').parse());
// alias的作用是让key拥有一个与之对应的缩略词，当赋值的时候，二者都会被同时赋值

// 此时，如果想给name赋值，可以通过 
// node alias.js --name=qiushangzhe 或者
// node alias.js -n=qiushangzhe 进行赋值

// 输出结果 分别为
/*   node alias.js --name=qiushangzhe
{ 
  _: [],
  help: false,
  version: false,
  name: 'qiushangzhe',
  n: 'qiushangzhe',
  '$0': 'alias.js' 
}
*/

/*  node alias.js -n=qiushangzhe
  { 
    _: [],
    help: false,
    version: false,
    n: 'qiushangzhe',
    name: 'qiushangzhe',
    '$0': 'alias.js' 
  }
*/


// 可以看到两种情况都可以对name和n进行赋值