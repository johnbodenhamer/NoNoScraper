const puppeteer = require('puppeteer-core');

(async () => {
    const url = 'https://www.espn.com/mlb/scoreboard'
    const browser = await puppeteer.launch({ignoreDefaultArgs: ['--disable-extensions'], headless: false, args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--single-process',
    ]});
    const page = await browser.newPage();
    const timeSelectors = await page.evaluate(Array.from(document.querySelectorAll('div.ScoreCell__Time.ScoreboardScoreCell__Time')).map(times => times.innerText)) // inning
    const competitors = await page.evaluate(document.querySelectorAll('ul.ScoreboardScoreCell__Competitors'))
    const lineScores = await page.evaluate(Array.from(document.querySelectorAll('div.ScoreboardScoreCell_Linescores')).map(scores => scores.innerText)) // 3rd item is hit column
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    
    console.log(timeSelectors);
  
    await browser.close();
  })();
