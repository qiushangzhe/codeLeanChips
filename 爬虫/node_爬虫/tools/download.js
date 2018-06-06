//网络
var request = require('request');
//文件读写
var fs = require('fs');
//配置参数
var config = require('../config');
//转码
var urlencode = require('urlencode');

function downLoad(_url){
    var url = _url.replace("http://code.tarena.com.cn/","");
    var dirList = url.split('/');
    var fileName = dirList.pop();
    var lujing = "./data/"
    for(var i=0;i<dirList.length;i++){
        lujing += dirList[i];
        if(fs.existsSync(lujing)){
            //如果路径存在
            lujing+="/";
            continue;
        }
        else{
            //如果路径不存在
            fs.mkdirSync(lujing);
            lujing+="/";
        }
    }
    request(_url).auth(config.username, config.password, false)
        .on('error',function(err){
            console.error(err);
        }).pipe(
            fs.createWriteStream('./data/'+dirList.join('/')+'/'
            +urlencode.decode(fileName, 'gbk')
        ));
}


module.exports = downLoad;
