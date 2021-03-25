const request = require("request");
const cheerio = require("cheerio");
const getIssues = require("./getIssues");
const fs = require("fs");

function getFiveRepos(link,topic){
    request( link  , function cb(error , response , data){
        let ch = cheerio.load(data);
        let allATags = ch('.border.rounded.color-shadow-small.color-bg-secondary.my-4');
        // console.log(allATags);
        for(let i=0 ; i<5; i++){
            let allNavLinks = cheerio(allATags[i]).find(".tabnav-tabs a");
            let issueLink = cheerio(allNavLinks["1"]).attr("href");
            let completeIssueLink = "https://www.github.com"+issueLink;
            let insideFolder = cheerio(allATags[i]).find('a.text-bold').text().trim();
            // makeFolder(insideFolder,topic);
            let projectPath = `./GITHUB/${topic}/${insideFolder}`;    
            if(!fs.existsSync(projectPath)){
                fs.mkdirSync(projectPath);
            }
            getIssues(completeIssueLink,projectPath);
        }
    } );
    
}
module.exports = getFiveRepos;
