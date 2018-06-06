/*
    1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
    2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
    3. 针对所有的元素重复以上的步骤，除了最后一个。
    4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
*/

var numberList = [2, 4, 5, 12, 45, 11, 8, 1, 3, 42, 6];
for (var i = numberList.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        if (numberList[j] > numberList[j + 1]) {
            console.log("交换了");
            //如果前一个数大于后一个数，交换
            var buffer = numberList[j];
            numberList[j] = numberList[j + 1];
            numberList[j + 1] = buffer;
        }
    }
}

console.log(numberList);

// https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487594517907&di=cb61814d29d74e1ef14396f52a89adfc&imgtype=0&src=http%3A%2F%2Fimages.cnitblog.com%2Fblog%2F692756%2F201411%2F192324238906099.png