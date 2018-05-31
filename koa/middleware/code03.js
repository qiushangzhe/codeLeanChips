middleware = [];

function a(next) {
    console.log('--------------------step 1--------------------');
    next();
    console.log('--------------------step 1 over--------------------');
}

function b(next) {
    console.log('--------------------step 2--------------------');
    next();
    console.log('--------------------step 2 over--------------------');
}

function c(next) {
    console.log('--------------------step 3--------------------');
    console.log('--------------------step 3 over--------------------');
}

middleware.push(a);
middleware.push(b);
middleware.push(c);

// const start = a.bind(null, b.bind(null, c));

function compose() {
    let index = -1;
    return getItem(0);
}

function getItem(i) {
    if (i === middleware.length) return null;
    return middleware[i].bind(null, getItem(i + 1));
}


const result = compose();
// console.log(result);
result();