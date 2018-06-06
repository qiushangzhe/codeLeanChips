// 把promise思想代码封装成一个对象
var defer = function () {
    var pending = [], value;
    return {
        resolve: function (_value) {
            value = _value;
            for (var i = 0, ii = pending.length; i < ii; i++) {
                var callback = pending[i];
                callback(value);
            }
            pending = undefined;
        },
        then: function (callback) {
            if (pending) {
                pending.push(callback);
            } else {
                callback(value);
            }
        }
    }
};

var oneOneSecondLater = function () {
    //创建 延迟 对象
    var result = defer();
    setTimeout(function () {
        //把最后的结果通过resolve传出去
        result.resolve(1);
    }, 1000);
    return result;
};

oneOneSecondLater().then(callback)
