var config = require('./config');
var request = require('request');
var cheerio = require("cheerio");
var down = require('./tools/download');
var fs = require('fs');

var index_1 = [];
request.get(config.url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        //analyse.setHtml(body);
        $ = cheerio.load(body);
        for (var i = 0; i < $('pre a').length; i++) {
            if (i == 0) continue;
            index_1.push($('pre a').eq(i).html());
        }
        getWeb(config.url + config.path);
    }
}).auth(config.username, config.password, false);

function getWeb(_url) {
    request.get(_url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            for (var i = 0; i < $('pre a').length; i++) {
                var string = $('pre a').eq(i).attr('href');
                if (i == 0) continue;
                if(string[string.length-1] == '/') getWeb(_url+string);
                else down(_url+string);
            }
        }
    }).auth(config.username, config.password, false);
}
