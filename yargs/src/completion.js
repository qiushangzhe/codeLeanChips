// fucking 没弄懂是干啥的？
var argv = require('yargs')
    .completion('completion', function(current, argv) {
        console.log('------------------------------');
        console.log(current, argv);
        console.log('------------------------------');
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(['apple', 'banana'])
            }, 10)
        })
    })
    .argv;