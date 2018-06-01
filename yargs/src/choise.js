var argv = require('yargs')
    .alias('i', 'ingredient')
    .describe('i', '选择现在要干什么') // 选线的描述
    .choices('i', ['吃饭', '睡觉', '写代码', '玩电脑游戏']) // 给可选值
    // .help('help')
    .argv

/*
  也可以通过option的方式
  var argv = require('yargs')
    .option('type', {
      alias: 't',
      describe: '选择一种事情做',
      choices: ['吃饭', '睡觉', '写代码', '玩电脑游戏']
    })
    .argv
*/
console.log(argv);

/*
{ _: [],
  help: false,
  version: false,
  i: '吃饭',
  ingredient: '吃饭'/undefined,
  '$0': 'choise.js' }
*/