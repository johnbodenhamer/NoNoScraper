const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

export const cheerioScraper = app.get('/', (req, res) => {
    let url = 'https://www.espn.com/mlb/scoreboard';

    request(url, (error, response, html) => {
        if(!error) {
            const $ = cheerio.load(html);
            const gameModule = $('.gameModules')
            
            // console.log(gameModule.text());
            let list = [];
            const cards = $('#fittPageContainer > div:nth-child(4) > div > div.PageLayout__Main > div:nth-child(1) > div > section > div').text();
            // console.log(cards) 

            const innings = $('.ScoreCell__Time ScoreboardScoreCell__Time h9').each((i, el) => {
                const item = $(el).text();
                
            });
            console.log(innings);
        };
    });
});