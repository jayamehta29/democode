#!/usr/bin/env node

//integrating file system
let fs = require("fs");

//segregating content from the input
//eg node cat.js -s -b -n a.txt b.txt
let content = process.argv.slice(2);
//seprating files and flags 
let flags =[];
let files =[];
for(let i=0;i<content.length;i++){
    if(content[i].startsWith('-')){
        flags.push(content[i]);
    }else{
        files.push(content[i]);
    }
}

//reading data from file
let fileData = "";
for(let i=0;i<files.length;i++){
    fileData+=fs.readFileSync(files[i]);
    fileData+="\r\n";
}

//identifying the flags occurences( -s being priority)
if(flags.length==0){
    console.log(fileData);
    return;
}

//converting fileData into array
 let data = fileData.split("\r\n");
 
 
 let removedSpaces = [];
 let empty=false;
 let count=1;
 //checking for -s flag
 if(flags.includes("-s")){
    implementing_sflag(data);
 }

//  chking for -b && -n flag both together
 if(flags.includes("-b")&&flags.includes("-n")){
     //chk which comes first 
     if(flags.indexOf("-b")>flags.indexOf("-n")){
         //n came first
         //if -s has made effect on original data or not
        if(flags.includes("-s")){
            implementing_bflag(removedSpaces);
        }else{
            implementing_nflag(data);
        }    
     }else{
        //-b came first
        if(flags.includes("-s")){
            implementing_bflag(removedSpaces);
        }else{
            implementing_bflag(data);
        }
     }
 }else if(flags.includes("-n")){
    if(flags.includes("-s")){
        implementing_bflag(removedSpaces);
    }else{
        implementing_nflag(data);
    }
 }else if(flags.includes("-b")){
    if(flags.includes("-s")){
        implementing_bflag(removedSpaces);
    }else{
        implementing_bflag(data);
    }
 }

 //code for -s flag

function implementing_sflag(data){
    for(let i=0;i<data.length;i++){
        if(data[i]=="" && !empty){
            removedSpaces.push(data[i]);
            empty = true;
        }else if(data[i]!=""){
            removedSpaces.push(data[i]);
        }
    }
    let s = removedSpaces.join("\n");
    console.log(s); 
}


//code for -n flag;
function implementing_nflag(data){
    for(let i=0;i<data.length-1;i++){
        data[i]=`${i+1}.${data[i]}`;
    }
    let n = data.join("\n");
    console.log(n);
}

//code for -b

function implementing_bflag(data){
    for(let i=0;i<data.length;i++){
        if(data[i]!=""){
            data[i]= `${count}.${data[i]}`;
            count++;
        }
    }
    let b = data.join("\n");
    console.log(b);
}