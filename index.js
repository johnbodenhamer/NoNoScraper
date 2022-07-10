const express = requrire('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/', (req, res) => {
    let url = 'https://www.espn.com/mlb/scoreboard';

    request(url, (error, response, html) => {
        if(!error) {
            var $ = cheerio.load(html);
            var innings = document.querySelectorAll('div.ScoreCell__Time');
            console.log(innings);
        };
    });
});

app.listen('8080');
console.log('NoNo is running on http://localhost:8080');

module.exports = app;