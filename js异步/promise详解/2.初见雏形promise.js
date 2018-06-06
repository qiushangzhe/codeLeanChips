var getMessage = function() {
    var pending = [],
        value;
    setTimeout(function() {
        value = '我是那个message';
        for (var i = 0, ii = pending.length; i < ii; i++) {
            var callback = pending[i];
            callback(value);
        }
        pending = undefined;
    }, 2000);

    return {
        then: function(callback) {
            if (pending) {
                pending.push(callback);
            } else {
                callback(value);
            }
        }
    }
}


var handle = getMessage();
handle.then(function(data) {
    console.log('这里是第一个返回', data);
});

handle.then(function(data) {
    console.log('这里是第二个返回', data);
});

handle.then(function(data) {
    console.log('这里是第三个返回', data);
});
