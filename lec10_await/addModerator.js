const puppeteer = require('puppeteer');
// let challenges = require("./challenges");

const id = "xifov12632@aramidth.com";
const pass = "123456789";
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
    await tab.waitForTimeout(3000);
    let bothAtags = await tab.$$('.nav-tabs.nav.admin-tabbed-nav a');
    let stag = bothAtags[1];
    await stag.click();
    await addModerators(browser,tab);
})();

async function addModerators(browser,tab){
    await tab.waitForSelector('.backbone.block-center' , {visible:true});
    let allAtags = await tab.$$('.backbone.block-center');
    let allLinks = [];
    for(let i=0;i<allAtags.length;i++){
        let stag = allAtags[i];
        let challengeLink = await tab.evaluate( function(elem){ return elem.getAttribute("href");  }  ,  stag);
        allLinks.push(challengeLink);
    }
    let completeLink = allLinks.map( function(link){
        return "https://www.hackerrank.com"+link;
    });

    for(let i=0;i<completeLink.length;i++){
        await addModeratorToAQuestion(completeLink[i] , browser);
    }
    let allLis = await tab.$$('.pagination li');
    let nextBtnLi = allLis[allLis.length-2];
    let isDisabled = await tab.evaluate( function(elem){ return elem.classList.contains("disabled"); } , nextBtnLi );
    if(isDisabled){
        return;
    }
    else{
        await nextBtnLi.click();
        await addModerators(browser , tab);
    }
}

async function addModeratorToAQuestion(qLink,browser){
    let newTab = await browser.newPage();
    await newTab.goto(qLink); 
    await newTab.waitForSelector('li[data-tab="moderators"]' , {visible:true});
    await newTab.waitForTimeout(2000);
    await newTab.click('li[data-tab="moderators"]');
    await newTab.waitForSelector('#moderator' , {visible:true});
    await newTab.type('#moderator' , "Jaya");
    await newTab.click('.btn.moderator-save');
    await newTab.click('.save-challenge.btn.btn-green');
    await newTab.close();
}