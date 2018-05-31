function a(name) {
    // console.log(this);
    console.log(name); //输出函数a中的this对象
}

a(1);

// const buffer = a.bind(null, 'qiushangzhe');
// buffer();