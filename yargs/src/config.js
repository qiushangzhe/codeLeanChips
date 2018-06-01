// var argv = require('yargs')
//     .config({ foo: 1, bar: 2 })
//     .argv

// 可以通过外部的json文件进行配置yargs
const fs = require('fs');
var argv = require('yargs')
    .config('settings', function(configPath) {
        return JSON.parse(fs.readFileSync(configPath, 'utf-8'))
    })
    .argv
console.log(argv)