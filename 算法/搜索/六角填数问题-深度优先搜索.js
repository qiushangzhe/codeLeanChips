// 问题地址：http://blog.csdn.net/qq_32183461/article/details/50705953
// 六角型数据存储
let starMap = [];
// 初始化数据
starMap[1] = 1;
starMap[2] = 8;
starMap[12] = 3;
// 存储遍历过的节点
let target = [];
// 结果存储
let result = [];
// 搜索函数
function check(step) {
    // 创建边界条件
    if (step == 13) {
        // step是13代表已经都填满了。需要算一下当前填写的方案是否每条边相加都相等
        judge();
        return;
    }
}

// 输出 每种情况下 的结果
/*
1-3-6-8
1-4-7-11
2-3-4-5
2-6-9-12
5-7-10-12
8-9-10-11 
*/
function judge() {
    // 把每一条边的加和算出来。
    result[0] = starMap[1] + starMap[3] + starMap[6] + starMap[8];
    result[1] = starMap[1] + starMap[4] + starMap[7] + starMap[11];
    result[2] = starMap[2] + starMap[3] + starMap[4] + starMap[5];
    result[3] = starMap[2] + starMap[6] + starMap[9] + starMap[12];
    result[4] = starMap[5] + starMap[7] + starMap[10] + starMap[12];
    result[5] = starMap[8] + starMap[9] + starMap[10] + starMap[11];
    // 判断这些是否都相等
    for (let i = 0; i < 6; i++) {
        for (let j = 1 + 1; j < 6; j++) {
            if (result[i] != result[j]) {
                // 出现不等的情况，退出计算
                return;
            }
        }
    }
    // 都相等 输出最终的六角形数据
    console.log(starMap);
}