var map = [
    [2, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 3]
];
let head = 1;
let tail = 1;
let que = [];
let walk = [];
let flag = 0;
let direction = [
    { x: 1, y: 0 }, //右
    { x: 0, y: 1 }, //下
    { x: -1, y: 0 }, //左
    { x: 0, y: -1 } //上
];
// 起始点初始化
que[tail] = {
    x: 0,
    y: 0,
    father: null,
    step: 0
};
tail++; //

walk[0 * 10 + 0] = 1;
while (true) {

    for (let dir = 0; dir < direction.length; dir++) {
        tx = que[head].x + direction[dir].x;
        ty = que[head].y + direction[dir].y;
        // 不能超过边界线 
        if (tx < 0 || tx > map[0].length - 1 || ty < 0 || ty > map.length - 1) {
            continue;
        }
        if ((map[ty][tx] == 0 || map[ty][tx] == 3) && !walk[tx * 10 + ty]) {
            walk[tx * 10 + ty] = 1;

            que[tail] = {
                x: tx,
                y: ty,
                father: head,
                step: que[head].step + 1
            };
            tail++;
        }
        // 到达终点
        if (map[ty][tx] == 3) {

            flag = 1;
            break;
        }
    }
    if (flag == 1) {

        break;
    } else {
        head++;
    }
}

// 处理一下得到的最终数据
let buffer = que[que.length - 1];

let result = [];
while (true) {
    result.push(buffer);
    buffer = que[buffer.father];
    if (buffer.father == null) {
        result.push(buffer);
        break;
    }
}

console.log(result);
// 输出结果 路径的倒序
/*
    [ { x: 6, y: 4, father: 24, step: 10 },
  { x: 6, y: 3, father: 19, step: 9 },
  { x: 6, y: 2, father: 15, step: 8 },
  { x: 5, y: 2, father: 11, step: 7 },
  { x: 5, y: 1, father: 8, step: 6 },
  { x: 4, y: 1, father: 6, step: 5 },
  { x: 3, y: 1, father: 5, step: 4 },
  { x: 2, y: 1, father: 3, step: 3 },
  { x: 2, y: 0, father: 2, step: 2 },
  { x: 1, y: 0, father: 1, step: 1 },
  { x: 0, y: 0, father: null, step: 0 } ]
*/