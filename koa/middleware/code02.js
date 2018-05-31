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



const start = a.bind(null, b.bind(null, c));

start();
