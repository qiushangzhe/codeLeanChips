var numberList = [2, 4, 5, 12, 45, 11, 8, 1, 3, 42, 6];

//保证i的每次循环结束后，i位置为当前最小的数字
for (var i = 0; i < numberList.length; i++) {
    for (var j = i; j < numberList.length; j++) {
        if (numberList[i] > numberList[j]) {
            var temp = numberList[i];
            numberList[i] = numberList[j];
            numberList[j] = temp;
        }
    }
}

console.log(numberList);