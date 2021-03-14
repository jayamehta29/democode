const request = require("request");
const cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
// let url = "https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-royal-challengers-bangalore-1st-match-1254058/full-scorecard";
request(url,function(error,response,body){
    parseBody(body);
});

function parseBody(html){
    let ch = cheerio.load(html);
    //lastCommentary
    let datatwo = ch('.match-comment div[itemprop="articleBody"]>p');
    let lastCommentary = ch(datatwo['0']).text();
    console.log(lastCommentary);


    //date of match
    // let data = ch("main-container > div.match-page-wrapper.commentary-page-wrapper > div > div.match-body > div.comment-container > div.mb-5 > div > div:nth-child(1) > div.match-comment > div.d-flex.match-comment-padder.align-items-center > div.col-14.col-md-15.col-lg-13 > div > div > div.match-comment-long-text > p > b").text()
    // console.log(data);
}
