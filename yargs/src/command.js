// 给参数外面包了一个command的东西，类似分组一样。
let yargs = require('yargs');
let result = yargs
    .command('get', 'make a get HTTP request', {
        url: {
            alias: 'u',
            default: 'http://yargs.js.org/'
        }
    })
    .help()
    .argv

console.log(result);

// node command.js get --url=1
/*
  { 
      _: [ 'get' ],
    version: false,
    help: false,
    url: 1,
    u: 1,
    '$0': 'command.js' 
  }
*/

// node command.js get
/*
  { 
    _: [ 'get' ],
    version: false,
    help: false,
    url: 'http://yargs.js.org/',
    u: 'http://yargs.js.org/',
    '$0': 'command.js' 
  }
*/