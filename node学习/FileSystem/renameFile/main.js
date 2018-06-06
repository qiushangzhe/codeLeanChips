var fs = require('fs');

fs.rename("../file/file1.txt", "../file/新的文件.txt", ()=>{

})

fs.renameSync("../file/file1.txt", "../file/新的文件.txt");
