//http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
var numberList = [2, 4, 5, 12, 45, 11, 8, 1, 3, 42, 6];
var quickSort = function(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);　 //中间值索引　
    var pivot = arr.splice(pivotIndex, 1)[0];　　 //中间值
    var left = [];　　
    var right = [];
    for (var i = 0; i < arr.length; i++) {　　　　
        if (arr[i] < pivot) {　　　　　　
            left.push(arr[i]);　　　　
        } else {　　　　　　
            right.push(arr[i]);　　　　
        }　　
    }
    return quickSort(left).concat([pivot], quickSort(right));
};
console.time("排序");
console.log(quickSort(numberList));
console.timeEnd("排序");