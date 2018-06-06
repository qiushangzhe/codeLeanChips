// 输出‘1’，‘2’，‘3’的全排列
for (var i = 1; i <= 3; i++)
    for (var j = 1; j <= 3; j++)
        for (var k = 1; k <= 3; k++)
            if (i != j && j != k && i != k)
                console.log("%s%s%s", i, j, k);