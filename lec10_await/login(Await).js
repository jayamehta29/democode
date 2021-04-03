const puppeteer = require('puppeteer');
let challenges = require("./challenges");

let id = "kareb38160@astarmax.com";
let pass = "qwerty1234";
let tab;



(async function(){
    let browser = await puppeteer.launch({ 
        headless: false ,
        defaultViewport : null,
        args : ["--start-maximized"],
        // slowMo : 80
    });
    let allPages = await browser.pages();
    tab = allPages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pass);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    // await waitAndClick('.dropdown.profile-menu.theme-m-content');
    await tab.waitForSelector('.dropdown.profile-menu.theme-m-content' , {visible:true});
    await tab.click('.dropdown.profile-menu.theme-m-content');
    await tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav a' , {visible:true});
    let bothAtags = await tab.$$('.nav-tabs.nav.admin-tabbed-nav a');
    let stag = bothAtags[1];
    await stag.click();

    await tab.waitForSelector('.btn.btn-green.backbone.pull-right' , {visible:true});
    let createChallengeBtn = await tab.$('.btn.btn-green.backbone.pull-right');
    // console.log(createChallengeBtn);
    let createChallengeLink = await tab.evaluate( function(elem){ return elem.getAttribute("href");  }  ,  createChallengeBtn);
    createChallengeLink = 'https://www.hackerrank.com'+createChallengeLink;

    for(let i=0 ; i<challenges.length ; i++){
        // add a single challenge
        await addChallenge(challenges[i] , browser , createChallengeLink );
    }

})();
//challenges added
async function addChallenge(challenge , browser , createChallengeLink ){
    let challengeName = challenge["Challenge Name"];
    let description = challenge["Description"];
    let probStatement = challenge["Problem Statement"];
    let inputFormat = challenge["Input Format"];
    let constraints = challenge["Constraints"];
    let outputFormat = challenge["Output Format"];
    let tags = challenge["Tags"];
    await tab.waitForTimeout(3000);
    let newTab = await browser.newPage();
    await newTab.goto(createChallengeLink);
    await newTab.waitForSelector('#name' , {visible:true});
    await newTab.type('#name' , challengeName );
    await newTab.type('#preview' , description);
    await tab.waitForTimeout(3000);
    await newTab.type('#problem_statement-container .CodeMirror textarea' , probStatement );
    await newTab.type('#input_format-container .CodeMirror textarea' , inputFormat);
    await newTab.type('#constraints-container .CodeMirror textarea' , constraints);
    await newTab.type('#output_format-container .CodeMirror textarea' , outputFormat);
    await newTab.type('#tags_tag' , tags);
    await newTab.keyboard.press("Enter");
    await newTab.click('.save-challenge.btn.btn-green');
    await newTab.close();
}
