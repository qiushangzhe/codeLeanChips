var fs = require('fs');
var path = "../file/社会主义核心价值观.txt";



// fs.unlink(path, (err)=>{
//     if(err) {
//         console.log("删除失败！！！！（异步）");
//         throw err;
//     }
// })


var err = fs.unlinkSync(path);
if(err) {
    console.log("删除失败 同步");
    throw err;
}
