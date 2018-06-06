// 5行7列，0为可通过，1为不可通过。2为入口，3为出口
var map = [
    [2, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 3]
];
var walk = [
    []
];
var outPosition = {};
var result = [];
var minStep = 9999;
// 下，上，右，左
let direction = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 0, y: -1 }];
// 这种是八方向判断的搜索。 会很卡。
/*
    let direction = [
    { x: 1, y: 0 }, // 右
    { x: 1, y: 1 }, // 右下
    { x: 0, y: 1 }, // 下
    { x: -1, y: 1 }, // 左下
    { x: -1, y: 0 }, // 左
    { x: -1, y: -1 }, // 左上
    { x: 0, y: -1 }, // 上
    { x: 1, y: -1 } //右上
];
*/
function outPutMapInfo() {
    console.log('--------------------------------------');
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] == 2) {
                console.log("入口坐标为：x=%d y=%d", j, i);
            }
            if (map[i][j] == 3) {
                console.log("出口坐标为：x=%d y=%d", j, i);
                outPosition.y = i;
                outPosition.x = j;
            }
        }
    }
    console.log('--------------------------------------');
}
outPutMapInfo();
var buffer = [];

function dfs(x, y, step) {
    buffer.push({ x: x, y: y });

    // 判断边界值 (找到了出口)
    if (map[y][x] == 3) {
        // console.log(buffer);
        if (step < minStep) {
            console.log(step, "步");
            minStep = step;
            result = buffer.concat();
            return;
        }

    }
    for (let dir = 0; dir < direction.length; dir++) {
        let tx = x + direction[dir].x;
        let ty = y + direction[dir].y;

        // 不能超过边界线 
        if (tx < 0 || tx > map[0].length - 1 || ty < 0 || ty > map.length - 1) {
            continue;
        }

        if ((map[ty][tx] == 0 || map[ty][tx] == 3) && !walk[tx * 10 + ty]) {
            walk[tx * 10 + ty] = 1;
            dfs(tx, ty, step + 1);
            walk[tx * 10 + ty] = 0;
            buffer.pop();
        }
    }
    return;
}

dfs(0, 0, 0);
// buffer.forEach((obj) => {
//     console.log(JSON.stringify(obj));
// })
console.log(result);
// console.log(map[1][0])
// console.log(4 > map.length - 1);