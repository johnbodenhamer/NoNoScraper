const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const { cheerioScraper } = require('./cheerioScraper');
const app = express();

app.listen('8080');
console.log('NoNo is running on http://localhost:8080');

cheerioScraper;

module.exports = app;