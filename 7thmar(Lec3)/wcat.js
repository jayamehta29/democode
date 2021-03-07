//printing content of file

// let fs = require("fs");
// let content = process.argv.slice(2);
// //console.log(content);
// let files = [];
// let flags = [];
// for(let i=0;i<content.length;i++){
//     if(content[i].startsWith('-')){
//         flags.push(content[i]);
//     }else{
//         files.push(content[i]);
//     }
// }
// let fileData = "";
// for(let i=0 ; i<files.length ; i++){
//     // f1.txt => f2.txt
//     fileData += fs.readFileSync( files[i] );
// }
// console.log(fileData);

let fs = require("fs");
//+"" ->command converts into string
let aData = fs.readFileSync("./a.txt")+"";
//console.log(aData);
let data=aData.split("\r\n");

//implementing flag -s -- remove new lines

// console.log(data);
// let removedSpaces = [];
// let emptyPushed = false;
// function implementingFlag_s(data){
//     for(let i=0 ; i<data.length ; i++){
//         if( data[i] == '' && !emptyPushed ){
//             removedSpaces.push(data[i]);
//             emptyPushed = true;
//         }
//         else if(data[i] != ''){
//             removedSpaces.push(data[i]);
//         }
//     }
// }
// removeLargeSpaces(data);
// let joinedString = removedSpaces.join("\n");
// console.log(joinedString);

//********************************************************************************************
//implementing flag -b -- adding line number to non empty line

// let count = 1;
// function implementingFlag_b(data){
//     for(let i=0 ; i<data.length ;i++){
//         if(data[i] != ''){
//             data[i] = `${count}. ${data[i]}`;
//             count++;
//         }
//     }
//     let ans = data.join("\n");
//     console.log(ans);
// }
// implementingFlag_b(data);

//*********************************************************************************************
//implementing flag -n -- adding line number to all the lines
function implementingFlag_n(data){
    for(let i=1 ; i<data.length+1 ; i++){
        data[i-1] = `${i}. ${data[i-1]}`;
    }
    let addedLineNumber = data.join("\n");
    console.log(addedLineNumber);
    
}
implementingFlag_n(data); 
