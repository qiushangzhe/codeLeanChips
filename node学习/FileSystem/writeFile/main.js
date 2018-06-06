var fs = require('fs');

var str = "富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善";
var path = "../file/社会主义核心价值观.txt";
fs.writeFile(path,str,(err)=>{
    if(err) throw err;
    console.log("写入完毕");
});

var err = fs.writeFileSync(path,str);
if(err) throw err;
