const request = require("request");
const cheerio = require("cheerio");
// const getIssues = require("./getIssues");
const fs = require("fs");

function getIssues(link,projectPath){
    request( link  ,function cb(error , response , data){
        // parseData(data);
        let ch = cheerio.load(data);
        let allATags = ch('.js-navigation-container.js-active-navigation-container .js-issue-row .flex-auto a.h4');
        for(let i=0 ; i<5 ; i++){
            let aTag = allATags[i+""];
            let link = ch(aTag).attr("href");
            let issueName = ch(aTag).text().trim();
            let completeLink = "https://github.com/"+link;
            if(!fs.existsSync(`${projectPath}/issues.json`)){
                fs.writeFileSync(`${projectPath}/issues.json` , JSON.stringify([]));
            }else{
                let issues = JSON.parse(fs.readFileSync(`${projectPath}/issues.json`));
                let newIssue = {
                    "Issue Name":issueName,
                    "Issue Link":link
                }
                issues.push(newIssue);
                fs.writeFileSync(`${projectPath}/issues.json` , JSON.stringify(issues));
            }        
        }
    } );
}

module.exports = getIssues;

