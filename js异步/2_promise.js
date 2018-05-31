function a(base) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let buffer = base + 'ello';
            resolve(buffer);
        }, 1000)
    });
}

function b(base) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let buffer = base + ' ';
            resolve(buffer);
        }, 1000)
    });
}


function c(base) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let buffer = base + 'world';
            resolve(buffer);
        }, 1000)
    });
}

let base = 'h';

// 提高可读性 和 可维护性
a(base).then(data => b(data)).then(data => c(data)).then(data => {
    console.log("out-->", data);
});