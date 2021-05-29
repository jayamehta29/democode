let db;

let dbOpen = indexedDB.open("Gallery");
dbOpen.onupgradeneeded = function(e){
    db = e.target.result;
    //table
    db.createObjectStore("Media",{keyPath : "mid"});
}

dbOpen.onsuccess = function(e){
    db = e.target.result;
}


function saveMedia(mediaType,mediaSource){
    let txn = db.transaction("Media","readwrite");
    let mediaStore = txn.objectStore("Media");
    let mediaFile = {
        mid: Date.now(),
        mediaType,
        mediaSource
    }
    mediaStore.add(mediaFile);
}
// indexedDB.deleteDatabase("Gallery");