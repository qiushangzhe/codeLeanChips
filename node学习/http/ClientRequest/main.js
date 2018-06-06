const http = require('http');
const url = require('url');
let link_url = "http://i.jandan.net/ooxx";

http.get(link_url,(res)=>{
    console.log(res.statusCode);
    console.log(res.headers['content-type']);
    var rawData = null;
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        try {

            console.log(rawData);
        } catch (e) {
            console.log(e.message);
        }
    });
});
