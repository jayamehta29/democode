const puppeteer = require('puppeteer');

let id = "kareb38160@astarmax.com";
let pass = "qwerty1234";
let tab;
(async function(){
    let browser = await puppeteer.launch({ 
        headless: false ,
        defaultViewport : null,
        args : ["--start-maximized"],
        slowMo : 80
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
})();