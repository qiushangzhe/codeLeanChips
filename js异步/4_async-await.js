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

const base = 'h';
async function test() {
    let buffer = await a(base);
    buffer = await b(buffer);
    buffer = await c(buffer);
    return buffer;
}
(async function() {
    let result = await test();
    console.log(result);
}());

// koa2