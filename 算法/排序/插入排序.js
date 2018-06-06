/*
    1、从第一个元素开始，该元素可以认为已经被排序
    2、取出下一个元素，在已经排序的元素序列中从后向前扫描
    3、如果该元素（已排序）大于新元素，将该元素移到下一位置
    4、重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
    5、将新元素插入到该位置后
    6、重复步骤2~5
*/

var numberList = [2, 4, 5, 12, 45, 11, 8, 1, 3, 42, 6];

//从第二个开始
for (var i = 1; i < numberList.length; i++) {
    // 以i开始 向前遍历
    for (var j = i; j > 0; j--) {
        if (numberList[j - 1] > numberList[j]) {
            //交换
            var temp = numberList[j];
            numberList[j] = numberList[j - 1];
            numberList[j - 1] = temp;
        }
    }
}

console.log(numberList);