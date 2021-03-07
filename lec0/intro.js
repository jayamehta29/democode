// console.log("hello world");

// let obj = {
//     name: "jaya",
//     class : "dev",
//     arr: [
//         10,
//         false,
//         {
//           name: "Steve Rogers",
//           place: "Queens",
//         },
//         "Hey i am a value",
//         [1, 2, 3, 4, 5, 6],
//       ],
//       obj2 : {
//           name : "nsjabck"
//       }
// }
// console.log("accessing object obj");

// console.log(obj);
// console.log("traversing inside object obj");

// for(let i in obj){
//     console.log(i);
// }

function getFirstName(fullName){
    // fullName = "TONY STARK".split(" ") => [ "TONY" , "STARK"  ];
    fullName = fullName.split(" ");
    return fullName[0];
}

function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}

function sayHi( fullName  , fun  ){
    let name = fun(fullName);
    console.log(name);
}


sayHi("TONY STARK" , getFirstName);
sayHi("BRUCE BANNER" ,  getLastName);