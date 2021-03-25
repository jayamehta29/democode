const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const getFiveRepos = require("./getFiveRepos");

request("https://github.com/topics" , cb);
function cb(error , response , data){
    parseData(data);
}
let topic;
function parseData(html){
    let ch = cheerio.load(html);
    let aTag = ch('.container-lg.p-responsive.mt-6 ul li a');
    // console.log(aTag);
    for(let i=0;i<aTag.length;i++){
        let link = ch(aTag[i+""]).attr("href");
        let completeLink = "https://www.github.com"+link;
        topic = completeLink.split("/")[4].trim();
        createTopicsFolder(topic);
        getFiveRepos(completeLink,topic);
    }
    
}
function createTopicsFolder(topic){
    if(!fs.existsSync(`./GITHUB/${topic}`)){
        // create Folder on the basis of topic name !!
        fs.mkdirSync(`./GITHUB/${topic}`);
    }
}

