var fs = require('fs');


fs.readFile('../file/file1.txt',(err,data)=>{
    if(err) throw err;
    console.log('-----------第一种没有设置编码的读取方式(输出的是默认字节流)-----------');
    console.log(data);
    console.log('----------------------------------------------');
});

fs.readFile('../file/file1.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log('-----------第二种设置了utf8的编码读取方式-----------');
    console.log(data);
    console.log('----------------------------------------------');
});


//会阻塞主线程
//虽然是写在最后面执行的，但是只要这个不执行完，上面的不会执行出来。
var fileContext = fs.readFileSync('../file/test02.txt','utf8');
console.log('--------------同步方式读取文件----------------');
console.log(fileContext);
console.log('-------------------------------------------');
