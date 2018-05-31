const co = require('co');

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

test = function*() {
    let buffer = yield a(base);
    buffer = yield b(buffer);
    buffer = yield c(buffer);
    return buffer;
};

co(test).then(data => {
    console.log(data);
});