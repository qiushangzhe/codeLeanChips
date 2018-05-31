middleware = [];

function a({ ctx, next }) {
    console.log('--------------------step 1--------------------');
    ctx.message = '你好';
    console.log(ctx);
    next();
    console.log('--------------------step 1 over--------------------');
}

function b({ ctx, next }) {
    console.log('--------------------step 2--------------------');
    ctx.message += '，我是';
    console.log(ctx);
    next();
    console.log('--------------------step 2 over--------------------');
}

function c({ ctx, next }) {
    console.log('--------------------step 3--------------------');
    ctx.message += ' 邱上哲';
    console.log(ctx);
    console.log('--------------------step 3 over--------------------');
}

middleware.push(a);
middleware.push(b);
middleware.push(c);

// const start = a.bind(null, b.bind(null, c));

function compose() {
    let index = -1;
    const ctx = {};
    return getItem(0, ctx);
}

function getItem(i, ctx) {
    if (i === middleware.length) return null;
    return middleware[i].bind(null, { ctx, next: getItem(i + 1, ctx) });
}


const result = compose();
// console.log(result);
result();