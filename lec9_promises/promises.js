// const fs = require("fs");

// let promises = fs.readFileSync("./a.txt");

// console.log(promises);
const fs = require("fs");



let f1KaPromise = fs.promises.readFile("./f1.txt");
f1KaPromise.then(function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    return f2KaPromise;
})
.then(function(data){
    console.log(data+"");
    let f3KaPromise = fs.promises.readFile("./f3.txt");
    return f3KaPromise;
})
.then(function(data){
    console.log(data+"");
    return  console.log(data+"");
})