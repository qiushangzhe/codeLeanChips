function a(base, func) {
    setTimeout(() => {
        let buffer = 'ello';
        func(base + buffer);
    }, 2000)
}

function b(base, func) {
    setTimeout(() => {
        let buffer = ' ';
        func(base + buffer);
    }, 2000)
}


function c(base, func) {
    setTimeout(() => {
        let buffer = 'world';
        func(base + buffer);
    }, 2000)
}

let base = 'h';
a(base, (result_1) => {
    b(result_1, (result_2) => {
        c(result_2, (finalResult) => {
            base = finalResult;
            console.log(base);
        })
    })
})


console.log(base);