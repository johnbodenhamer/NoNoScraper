const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/', (req, res) => {
    let url = 'https://www.espn.com/mlb/scoreboard';

    request(url, (error, response, html) => {
        if(!error) {
            const $ = cheerio.load(html);
            const gameModule = $('.gameModules')
            
            // console.log(gameModule.text());
            let list = [];
            const cards = $('#fittPageContainer > div:nth-child(4) > div > div.PageLayout__Main > div:nth-child(1) > div > section > div').text();
            // console.log(cards) 

            const innings = $('[class*="ScoreCell__Time"]').text();
            console.log(innings);
        };
    });
});


app.listen('8080');
console.log('NoNo is running on http://localhost:8080');

module.exports = app;