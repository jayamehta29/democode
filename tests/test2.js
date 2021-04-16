// QUES 1

// let arr = [1, 2, 3, 4];

// function f(arr) {
//     for (x in arr) {
//         arr[x] = 0
//     }
//     return arr;
// }

// console.log(arr);

// console.log(f(arr));

// console.log(arr);

// ANS  
// 1. Side effects : Printing to a console, Modifying a global variable,
// 2.   const arr = f([1, 2, 3, 4]);
    // function f(arr) {
    //     // let arr = [1, 2, 3, 4];
    //     console.log(arr);
    //     for (x in arr) {
    //         arr[x] = 0
    //     }
        
    //     return arr;
    // }
    // console.log(arr);
    // console.log(arr);

// ********************************************

//QUES 2

// let obj = {
//     1: 0,
//     2: 1,
//     3: 2,
//     4: 3,
//     5: 4,
//     length: 5,
//   };
  
//   function f() {
//     for (let i = 1; i < obj.length; i++) {
//       obj[i] = obj[i] + 1;
//     }
//     delete obj["length"];
//     for (let x in obj) {
//       console.log(`at index ${x} we have value ${obj[x]}`);
//     }
//   }
  
//   f();

// ANS
// const obj = f({
//     1: 0,
//     2: 1,
//     3: 2,
//     4: 3,
//     5: 4,
//     length: 5,
//   });
  
//   function f(obj) {
//       let ans = [];
//     for (let i = 1; i < obj.length; i++) {
//       obj[i] = obj[i] + 1;
//     }
//     delete obj["length"];
//     for (let x in obj) {
//         ans.push("at index " + `${x} ` + "we have value " + `${obj[x]}`);
//     //   console.log(`at index ${x} we have value ${obj[x]}`);
//     }

//     return ans;
//   }
//   function g(obj){
//       for(let i=0;i<obj.length;i++){
//         console.log(obj[i]);
//       }
//   }
//   g(obj);

// **********************************************************************

// QUES 3
// Q - Write a function f that returns product of x and y with both of the following function calls
// function f(a,b){
//     var prd = function (b){console.log(a*b)};
//     if(typeof b =='undefined'){
//         return prd;
//     }else{
//         return prd(b);
//     }
// }
// f(2)(3);
// f(2,3);

//QUES 4
// let a = ["a", "b"]
// a[2] = a 
// function f(a) {
//     a = a[2]
//     console.log(a);
//     let n = Array("a", "b")
//     console.log(a[2] = n);
//     console.log(a);
//     console.log(n);
//     a = n;
//     console.log(a);
// }
// console.log(a);
// f(a)
// console.log(a);
//ANS 2

// *******************************************

// QUES 5
// Q create a polyfill of reduce
// (doubt)

// **********************************************************
// ques 6
// Q) How to implement setInterval of your own using setTimeout
// ANS
// function sti(idx){
//    if(idx==5){
//        return;
//    }
//     setTimeout(hi, 1000);
//    sti(idx+1);
// }
// function hi(){
//     console.log("hi");
// }
// sti(0);

// ***************************************************************

//QUES 7
// let count = 0;
// let interval = setInterval(function () {
//   console.log(count);
//   count++;
// }, 100);

// setTimeout(function () {
//   clearInterval(interval);
//   interval = setInterval(function () {
//     console.log(count);
//     count--;
//     if (count < 0) clearInterval(interval);
//   });
// }, 500);
// ANS 4

// ******************************************************

// QUES 9
// function globalFunction(x) {
//     return function outerFunction(y) {
//       return function innerFunction(z) {
//         return x + y + z;
//       };
//     };
//   }
  
//   let instance1 = globalFunction(2);
//   var instance2 = instance1(3);
//   console.log(instance2());
//   ANS 3

// *****************************************

// QUES10
// let arr = ["a", "b", "c", "d", 1, 2, 3, 4];

// arr.map(function (e) {
//   return 2 * e;
// });

// (function () {
//   arr.filter(function () {});
// })();

// console.log(arr);

// let nArr;
// nArr = arr.filter(function (e) {
//   return Number.isInteger(e);
// });
// nArr = new Array();
// console.log(nArr);

// nArr = arr
//   .filter(function (e) {
//     return !Number.isInteger(e);
//   })
//   .map(function (e) {
//     return e + 1;
//   });

// console.log(nArr);
// ANS 4

// *****************************************

