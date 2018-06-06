var fs = require('fs');
var Console = require('console').Console;
const output = fs.createWriteStream('./log/日志.log');
const errorOutput = fs.createWriteStream('./log/错误日志.log');
const logger = new Console(output, errorOutput);
const count = 5;
logger.log('count: %d', count);
logger.log("大家好，我是一个日志");
logger.error("我是一条错误日志");
