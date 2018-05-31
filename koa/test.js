const Koa = require('../lib/application');
const app = new Koa();

app.use(async(ctx, next) => {
    console.log('--------------------step 1--------------------');
    ctx.age = '18';
    next();
    console.log('--------------------step 1 over--------------------');
});


app.use(async(ctx, next) => {
    console.log('--------------------step 2--------------------');
    ctx.username = 'qiushangzhe';
    next();
    console.log('--------------------step 2 over--------------------');
});

app.use(async ctx => {
    console.log('--------------------step 3--------------------');
    ctx.body = `Hello ${ctx.username}`;
    console.log('--------------------step 3  over--------------------');
});

app.listen(3000);