//*****************ques1***********************
// let arr = [1, 2, 3, 4];
// // let newArr = [...arr];
// function f(arr) {
//     let newArray = arr.map(function(x){
//         return x%2==0;
//     })
//     return newArray;
// }

// console.log(arr);

// console.log(f(arr));

// console.log(arr);

// *************************ques2*****************

// let obj = {
//     1: 0,
//     2: 1,
//     3: 2,
//     4: 3,
//     5: 4,
//     length: 5,
// };

// function f() {
//     let newObj = JSON.parse(JSON.stringify(obj));
//     for (let i = 1; i <=newObj.length; i++) {
//         newObj[i] = obj[i] + 1;
//     }
//     delete newObj["length"];
//     return newObj;
// }

// function g(fun){
//     for (let x in fun) {
//         console.log(`at index ${x} we have value ${fun[x]}`);
//     }
// }

// let func = f();
// g(func);


// ******************ques3****************

// function prod(x, y) {
//     if (arguments.length == 1) {
//       return function (y) {
//         return x * y;
//       };
//     } else {
//       return x * y;
//     }
//   }

// console.log(prod(2,3));
// console.log(prod(2)(3));

//***********ques 4 ******************DOUBT*********

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



// *****************QUES 5***************

