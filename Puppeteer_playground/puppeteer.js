// var puppeteer = require('puppeteer');
// (async ()=>{
//     let movieURL = "https://www.imdb.com/title/tt0485947/?ref_=nv_sr_srsg_0";
    
//     let browser = await puppeteer.launch({
//         headless: false
//     });
//     let page = await browser.newPage();

//     await page.goto(movieURL, {waitUntil: "networkidle2"});

//     let data = await page.evaluate(() =>{
//         let title = document.querySelector('div[class="title_wrapper"] > h1').innerHTML;
//         let ratingV = document.querySelector('span[itemprop="ratingValue"]').innerHTML;
//         let ratingC = document.querySelector('span[itemprop="ratingCount"]').innerHTML;

//         return {
//             title,
//             ratingV,
//             ratingC

//         }
//     });

// console.log(data);

// await page.click('a[class="sc-bdVaJa iWlUOU imdb-header__logo-link _3XaDsUnZG7ZfFqFF37dZPv"]');

// const delay = ms => new Promise(res => setTimeout(res, ms));

// await delay(5000);

// await browser.close();

// })();


//-----------------------
var puppeteer = require('puppeteer');

(async ()=>{
    let jornal_JN = "https://jn.pt";
    let publico_P = "https://publico.pt"
    
    let browser = await puppeteer.launch({
        headless: true
    });
    let page = await browser.newPage();

    await page.goto(jornal_JN, {waitUntil: "networkidle2"});

    let data_JN = await page.evaluate(() =>{
        let news_jn = [];
        // let smallerTitle = document.querySelectorAll('article[class="t-g1-l1-am1"] > header > h2 > a').innerText; //its only grabbing one
        var headlines = document.querySelectorAll('div[class="t-g1-l1-i-i"] > article > header > h2 > a') //grab all headlines
        .forEach(info =>{ news_jn.push(info.text);
        });
        
        return {
            // title,
            // headlines,
            news_jn
        }
    });

console.log(data_JN); // log JN

await page.goto(publico_P, {waitUntil: "networkidle2"});

let data_Publico = await page.evaluate(() =>{
    let news_Publico = [];
    var headlines = document.querySelectorAll('li[class="stack__slice__item"] > article > div[class="card__inner"] > div[class="card__content"] > div > h3 > a[class="card__faux-block-link"]')
    .forEach(info =>{ 
        let news_fixed = info.text.trim();
        news_Publico.push(news_fixed);
    });
    
    return {
        // title,
        // headlines,
        news_Publico
    }
});

console.log(data_Publico); //log Publico

await browser.close();

})();



// var headlines = document.querySelector('li[class="stack__slice__item"] > article[class="card card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news"] > div[class="card__inner"] > div[class="card__content"] > div > h3 > a');
// console.log(headlines)

// var news = []
// var headlines = document.querySelectorAll('li[class="stack__slice__item"] > article[class="card card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news card--f tone--news"] > div[class="card__inner"] > div[class="card__content"] > div > h3 > a');
// headlines.forEach(value => news.push(value.text))

// var headlines = document.querySelector('li[class="stack__slice__item"] > article > div[class="card__inner"] > div[class="card__content"] > div > h3 > a');
// var headlines = document.querySelectorAll('li[class="stack__slice__item"] > article > div[class="card__inner"] > div[class="card__content"] > div > h3 > a[class="card__faux-block-link"]');