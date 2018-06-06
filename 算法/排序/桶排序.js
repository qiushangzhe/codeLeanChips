//时间复杂度最低，空间复杂度最高的一种算法。
var array = [20, 1, 3, 4, 39, 7];
var result = [];
for (var i = 0; i < array.length; i++) {
    if (!result[array[i]]) {
        result[array[i]] = 1;
    } else {
        result[array[i]]++;
    }
}

// 输出结果
for (var i = 0; i < result.length; i++) {
    if (result[i]) {
        for (var j = 0; j < result[i]; j++) {
            console.log(i);
        }
    }
}