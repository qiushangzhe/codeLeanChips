> path模块是nodejs提供给用户进行路径相关操作的一个模块，方便用户定位文件的位置，以及一些其他与文件位置定位的方法。

### 引入方法
```javascript
var path = require('path');
```

### 常用方法

#### 1. 路径拼接
```javascript
var p = path.join([...paths]);
```

```javascript
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// Returns: '/foo/bar/baz/asdf'
```

#### 2. 获取某路径的父级目录
```
path.dirname(path)
```

#### 3. 获取某文件的扩展名
```
path.extname(path)
```
