function a() {
    console.log('--------------------step 1--------------------');
    b();
    console.log('--------------------step 1 over--------------------');
}

function b() {
    console.log('--------------------step 2--------------------');
    c();
    console.log('--------------------step 2 over--------------------');
}

function c() {
    console.log('--------------------step 3--------------------');
    console.log('--------------------step 3  over--------------------');
}

function start() {
    a();
}

start();