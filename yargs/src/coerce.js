// ---------------1-------------
// 这种是可以给file赋值一个文件
// var argv = require('yargs')
//     .coerce('file', function(arg) {
//         return require('fs').readFileSync(arg, 'utf8')
//     })
//     .argv

// ----------------2-------------
// 执行 node coerce.js --data=1 会自动把Date.parse(1)的结果赋值给date
// 执行 node coerce.js --json={} 会自动把JSON.parse({})的结果赋值给json
// var argv = require('yargs')
//     .coerce({
//         date: Date.parse,
//         json: JSON.parse
//     })
//     .argv

// ----------------3---------------
// 都会把path.resolve的结果赋值给对应的key
// node coerce.js --src ./base.js
// node coerce.js --dest ./base.js
// var path = require('path')
// var argv = require('yargs')
//     .coerce(['src', 'dest'], path.resolve)
//     .argv

// --------------------------------------
// 可以实现像git的初始化一样的骚操作
// 执行 node coerce.js --user.name Batman --user.password 123
// 输出 gives us: {name: 'batman', password: '[SECRET]'}
// var argv = require('yargs')
//     .option('user')
//     .coerce('user', opt => {
//         opt.name = opt.name.toLowerCase()
//         opt.password = '[SECRET]'
//         return opt
//     })
//     .argv
console.log(argv);