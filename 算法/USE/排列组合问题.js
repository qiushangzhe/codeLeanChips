// 六选3-4问题
let input = [2, 5, 3, 4, 6, 9];
let output = [];
let target = [];

function check(step) {
    if (output.length > 2) {
        console.log(output);
    }
    if (step == 5) {
        return;
    }
    for (let i in input) {
        if (!target[input[i]]) {
            target[input[i]] = 1;
            output.push(input[i]);
            check(step + 1);
            target[input[i]] = 0;
            output.pop();
        }
    }
}

check(1);