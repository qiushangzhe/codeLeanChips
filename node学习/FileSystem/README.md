> 计算机语言是与计算机进行沟通的手段，而文件操作是其中最为重要也是常见的操作。所以，首先从node.js文件读写开始。

## File System

### 模块使用方法

```
var fs = require('fs');
```

### --------常见文件操作----------

#### 1.读取文件

函数原型：

``fs.readFile(file[, options], callback)``
- file (String/Buffer) 文件路径，或者写一个descriptor
- options
    - encoding （String/Null）默认是Null
    - flag （String）默认是`'r'`;
- callback 函数参数(err, data)



```javascript
// 如果没有指定读取的编码，返回的data是字节流。
// 异步的方式读取文件
fs.readFile('文件path', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

```javascript
// 同步方式读取文件
// 注意这里返回的是二进制流
var result = fs.readFileSync('文件path');

// 这里返回的是文件的字符串
var result = fs.readFileSync('文件path','utf8');

```

#### 2.写入文件

函数原型：

``fs.writeFile(file,data,[, options], callback)``
- file (String/Buffer) 文件路径，或者写一个descriptor
- options
    - encoding （String/Null）默认是Null
    - mode (Int) default = 0o666
    - flag （String）默认是`'r'`;
- callback 函数参数(err)

```javascript
// 异步的方式写入文件
fs.writeFile("文件path","写入内容",(err)=>{
    if(err) throw err;
    console.log("写入完毕");
});
```

```javascript
// 同步的方式写入文件
var err = fs.writeFileSync(path,str);

// 如果没有错误err为undefined
if(err) throw err;
```

#### 3.在当前文件中添加字符
函数原型：

``fs.appendFile(file, data[, options], callback)``

- option
    - encoding <String> | <Null> default = 'utf8'
    - mode <Integer> default = 0o666
    - flag <String> default = 'a'

```javascript
fs.appendFile("filepath","data to appen",(err)=>{
    if (err) throw err;
})
```

```javascript
fs.appendFileSync('filepath', 'data to append');
```

#### 4.删除文件
函数原型：

``fs.unlink(path,callback)``
- path (String/Buffer)
- callback 函数参数(err)

```javascript
// 异步的方式写入文件
fs.unlink(path, (err)=>{
    if(err) {
        console.log("删除失败！！！！（异步）");
        throw err;
    }
})
```

```javascript
var err = fs.unlinkSync(path);
if(err) {
    console.log("删除失败 同步");
    throw err;
}
```

#### 5.文件重命名
函数原型：

``fs.rename(oldPath, newPath, callback)``
- oldPath 原来叫啥
- newPath 要改成啥
- 回调，没参数。

```javascript
//异步
fs.rename("../file/file1.txt", "../file/新的文件.txt", ()=>{

})
```

```javascript
fs.renameSync("../file/file1.txt", "../file/新的文件.txt");
```

#### 6.判断文件是否存在
```javascript
fs.access('filepath', (err) => {
    if (!err) {
        console.error('文件存在');
        return;
    }
});
```


### -----文件夹操作-----
#### 1.创建文件夹

函数原型
``fs.mkdir(path[, mode], callback)``

- mode 一般没啥用，不用改。

#### 2. 删除文件夹
函数原型
``fs.rmdir(path, callback)``
