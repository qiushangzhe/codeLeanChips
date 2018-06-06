var fs = require('fs');

fs.access('../file/test01.txt', (err) => {
    console.log(err);
    if (!err) {
        console.error('file already exists');
        return;
    }
});
