//一 .传统函数返回值的方式
var getSomeMessage_0 = function() {
    return 'message_0';
}

//输出 message_0
console.log(getSomeMessage_0());



//二 .传统异步获取参数的方式
////本函数由于某些特定的原因 五秒钟之后才会返回数据
var getSomeMessage_1 = function(successFun) {
    setTimeout(function() {
        var data = "message_1";
        if (successFun) {
            successFun(data);
        }
    }, 5000);
}

//输出 undefined
console.log(getSomeMessage_1());
// 需要换成这样
getSomeMessage_1(function(data) {
    // 输出message_1
    console.log(data);
});


//三.换成then的方式
var getSomeMessage_2 = function() {
    var callback;
    setTimeout(function() {
        var data = "message_2";
        callback(data);
    }, 5000);
    return {
        then: function(func) {
            callback = func;
        }
    }
}

getSomeMessage_2().then(function(data) {
    // 输出 message_2
    console.log(data);
});


//但是有一个问题 返回的数据不能被多次利用
//以下代码预想实现的是输出1 message_2 和 2 message_2
//但是实际 返回值只有 2 message_2

var handle = getSomeMessage_2();
handle.then(function(data) {
    console.log('1', data);
});

handle.then(function(data) {
    console.log('2', data);
});