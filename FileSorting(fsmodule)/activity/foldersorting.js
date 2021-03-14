const fs = require("fs");
const path = require("path");
let extensions = require("./util");
let folderPath = "./Download";
let extFolderPath;


function checkFolder(extension){
    for(let key in extensions){
        if(extensions[key].includes(extension)){
            //string interpolation;
            extFolderPath = `${folderPath}/${key}`;
            break;
        }
    }
    return fs.existsSync(extFolderPath);
}

function moveFile(fileName){
    //copy file
    let srcFilePath = `${folderPath}/${fileName}`;
    let destFilePath = `${extFolderPath}/${fileName}`;
    fs.copyFileSync(srcFilePath,destFilePath);
    
    //delete file

    fs.unlinkSync(srcFilePath);

}

function createFolder() {
    fs.mkdirSync(extFolderPath);
  }
function sortFolder(folderPath){
    //get content of the folder
    let content = fs.readdirSync(folderPath);
    for(let i=0;i<content.length;i++){
        //get extensions of each file
        var stats = fs.lstatSync(`${folderPath}/${content[i]}`);
        if(stats.isDirectory){
            sortFolder(`${folderPath}/${content[i]}`);
        }else{
            let extensionName = path.extname(content[i]);
            console.log(extensionName);
            let extensionFolderExist = checkFolder(extensionName);
            if(extensionFolderExist){
                moveFile(content[i]);
            }else{
                createFolder();
                moveFile(content[i]);
            }
        }
        
    }
}
sortFolder(folderPath);

