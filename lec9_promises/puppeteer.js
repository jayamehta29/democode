const puppeteer = require('puppeteer');

let id = "kareb38160@astarmax.com";
let pass = "qwerty1234";

let tab;

let browserOpenPromise = puppeteer.launch({ 
    headless: false ,
    defaultViewport : null,
    args : ["--start-maximized"],
    // slowMo : 80
});


browserOpenPromise.then(function(browser){
    console.log("Browser opened !!!");
    //browser opened in chromium
    let allPagesPromise = browser.pages();
    return allPagesPromise;
})
.then(function(pages){
    tab = pages[0];
    //hackerrank website opened
    let pageOpenPromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPromise;
    //Promise<pending>
})
.then(function(){
    //login id entered
    let idTypePromise = tab.type("#input-1" , id);
    return idTypePromise;
})
.then(function(){
    //password entered
    let pwTypePromise = tab.type("#input-2" , pass);
    return pwTypePromise;
})
.then(function(){
    //login button clicked
    let loginPromise = tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
    return loginPromise;
})
.then(function(){
    //iterview prpe page opened by creating a promise function
    let waitAndClickPromise = waitAndClick('#base-card-1-link');
    return waitAndClickPromise; //Promise<Pending>
})
.then(function(){
    //warp up card opened by creating a promise function
    let waitAndClickPromise = waitAndClick('a[data-attr1="warmup"]');
    return waitAndClickPromise;
})
.then(function () {
    let waitPromise = tab.waitForSelector(
      ".js-track-click.challenge-list-item",
      { visible: true }
    );
    return waitPromise;
})
.then(function () {
    let allQuesATagsPromise = tab.$$(".js-track-click.challenge-list-item");
    return allQuesATagsPromise;
})
.then(function (allQuesATags) {
    //[ {} , {} , {} , {} ]  =>[ <a href="laksnfkjasf"/> , <a href="akjsbfua" /> , <a href="alshifia" /> , <a href="akjjsbfa" /> ];
    // pendingPromise = tab.Akjsfnakjbsf(aTag)  => aTag.getAttribute("href"); => value
    let allLinksPromise = [];

    for (let i = 0; i < allQuesATags.length; i++) {
      let aTag = allQuesATags[i];
      let linkPromise = tab.evaluate(function (elem) {
        return elem.getAttribute("href");
      }, aTag);
      allLinksPromise.push(linkPromise);
    }
    // allLinksPromise = [ Promise<link> , Promise<link> , Promise<link> , Promise<link> ];
    let sbkaPromise = Promise.all(allLinksPromise);
    // return Promise<Pending>
    return sbkaPromise; //Promise<Pending> => Promise<[link , link , link , link]>
  })
  .then(function (allLinks) {
    // [ link , link , link , link]
    let completeLinks = allLinks.map(function (link) {
      return "https://www.hackerrank.com" + link;
    });
    // console.log(completeLinks);
    let oneQuesSolvePromise = solveQuestion(completeLinks[0]);
    // 2k
    for(let i=1; i<completeLinks.length ; i++){
      oneQuesSolvePromise = oneQuesSolvePromise.then( function(){
        let nextQuesSolvePromise = solveQuestion(completeLinks[i]);
        return nextQuesSolvePromise;
      })
    }
    // 10k
    return oneQuesSolvePromise;
  })
  .then(function () {
    console.log("All Ques Solved Succesfully !!!!");
  })

.catch(function(error){
    console.log(error);
});

function handleLockBtn(){
    return new Promise( function(resolve , reject){
      let waitPromise = tab.waitForSelector('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled' , {visible:true , timeout:5000});
      waitPromise.then(function(){
        let lockBtnPromise = tab.$('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled');
        return lockBtnPromise;
      })
      .then(function(lockBtn){
        // console.log(lockBtn);
        let lockBtnClickPromise = lockBtn.click();
        return lockBtnClickPromise;
      })
      .then(function(){
        // clicked on lock btn
        // lock btn found
        console.log("lock btn found !!!");
        resolve();
      })
      .catch(function(error){
        // lock btn not found
        console.log("lock btn not found !!!");
        resolve();
      })
  
    })
}
function getCode() {
    return new Promise(function (resolve, reject) {
        let waitPromise = tab.waitForSelector(".hackdown-content h3");
        waitPromise
        .then(function () {
            let allCodeNamesElementsPromise = tab.$$(".hackdown-content h3");
            return allCodeNamesElementsPromise;
        })
        .then(function (allCodeNameElements) {
            // [ <h3>C++</h3> , <h3>Python</h3> , <h3>Java</h3>  ]
            let allCodeNamesPromise = [];
            for (let i = 0; i < allCodeNameElements.length; i++) {
                let codeNamePromise = tab.evaluate(function (elem) {
                    return elem.textContent;
                }, allCodeNameElements[i]);
                allCodeNamesPromise.push(codeNamePromise);
            }
            // allCodeNamesPromise = [  Promise<Pending> , Promise<Pending> , Promise<Pending> ];
            let sbkaPromise = Promise.all(allCodeNamesPromise);
            return sbkaPromise; //Prmose<Pending> => Promise<["C++" , "Python" , "Java"]>
        })
        .then(function (codeNames) {
            //["C++" , "Python" , "Java"];
            for (let i = 0; i < codeNames.length; i++) {
            if (codeNames[i] == "C++") {
                    idx = i;
                    break;
                }
            }
            let allCodeDivPromise = tab.$$(".hackdown-content .highlight");
            return allCodeDivPromise; // Promise<Pending>
        })
        .then(function (allCodeDivs) {
            //[ <div></div> , <div></div> , <div></div> ];
            let codeDiv = allCodeDivs[idx];
            let codePromise = tab.evaluate(function (elem) {
            return elem.textContent;
            }, codeDiv);
            return codePromise;
        })
        .then(function (code) {
            gCode = code;
            resolve();
        })
        .catch(function (error) {
            reject(error);
        });
    });
}
function pasteCode() {
    return new Promise(function (resolve, reject) {
      let problemTabClickPromise = tab.click('div[data-attr2="Problem"]');
      problemTabClickPromise
        .then(function () {
          let waitAndClickPromise = waitAndClick(".custom-input-checkbox");
          return waitAndClickPromise;
        })
        .then(function () {
          let waitForTextBoxPromise = tab.waitForSelector(".custominput");
          return waitForTextBoxPromise;
        })
        .then(function () {
          let codeTypePromise = tab.type(".custominput", gCode);
          return codeTypePromise;
        })
        .then(function () {
          let controlKeyDownPromise = tab.keyboard.down("Control");
          return controlKeyDownPromise;
        })
        .then(function () {
          let aKeyPressPromise = tab.keyboard.press("A");
          return aKeyPressPromise;
        })
        .then(function () {
          let xKeyPressPromise = tab.keyboard.press("X");
          return xKeyPressPromise;
        })
        .then(function(){
          let clickedOnCodeBoxPromise = tab.click('.monaco-editor.no-user-select.vs');
          return clickedOnCodeBoxPromise;
        })
        .then(function(){
          let aKeyPressPromise = tab.keyboard.press("A");
          return aKeyPressPromise;
        })
        .then(function () {
          let vKeyPressPromise = tab.keyboard.press("V");
          return vKeyPressPromise;
        })
        .then(function () {
          let controlKeyUpPromise = tab.keyboard.up("Control");
          return controlKeyUpPromise;
        }).then(function(){
          resolve();
        })
        .catch(function(error){
          reject(error);
        })
    });
}
function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = tab.waitForSelector(selector , {visible:true});
        waitPromise.then(function(){
            let clickPromise = tab.click(selector);
            return clickPromise;
          })
        .then(function(){
            resolve();
        })
        .catch(function(error){
            reject(error);
        })
    });
}
function solveQuestion(qLink) {
    return new Promise(function (resolve, reject) {
      let gotoPromise = tab.goto(qLink);
      gotoPromise
        .then(function () {
          let waitAndClickPromise = waitAndClick('div[data-attr2="Editorial"]');
          return waitAndClickPromise;
        })
        .then(function(){
          let lockBtnPromise = handleLockBtn();
          return lockBtnPromise;
        })
        .then(function () {
          // this function will get code of c++ and set in gCode variable
          let codePromise = getCode();
          return codePromise;
        })
        .then(function () {
          // this function will pasteCode in the editor from the gCode variable
          let pastePromise = pasteCode();
          return pastePromise;
        })
        .then(function () {
          let submitPromise = tab.click('.pull-right.btn.btn-primary.hr-monaco-submit');
          return submitPromise;
        })
        .then(function(){
          resolve();
        })
        .catch(function(error){
          reject(error)
        })
    });
}