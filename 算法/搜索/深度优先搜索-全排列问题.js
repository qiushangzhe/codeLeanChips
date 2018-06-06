// 输出‘1’，‘2’，‘3’的全排列 
var a = [];
var list = ['1', '2', '3', '5'];
var book = [];

function dfs(step) {
    if (step == list.length + 1) {
        var buffer = '';
        for (let index = 1; index < a.length; index++) {
            buffer += a[index];
        }
        console.log(buffer);
        return;
    }
    for (var i = 0; i < list.length; i++) {
        if (!book[list[i]]) {
            a[step] = list[i];
            book[list[i]] = 1;
            dfs(step + 1);
            book[list[i]] = 0;
        }
    }
}

dfs(1)