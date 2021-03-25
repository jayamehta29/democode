//ques 1
// const num = 5;
// console.log(num + 5);
// let a = 6;
// a = a + num;
// console.log(num - a);
//*******************************
//ques 2
// let a = 2;
// {
//   let a = 3;
//   {
//     let a = 4;
//     {
//       let a = 5;
//       console.log(a);
//     }
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);

//ques_6
// (function () {
//     if ((-100 && 100 && "0") || [] === true || 0) {
//       console.log(1);
//       if ([] || (0 && false)) {
//         console.log(2);
//       }
  
//       if (Infinity && NaN && "false") {
//         console.log(3);
//         if ("") {
//           console.log(4);
//         }
//       } else {
//         console.log(5);
//         if (({} || false === "") && !(null && undefined)) {
//           console.log(6);
//         }
//       }
//     } else {
//       console.log(7);
//     }
//   })();

//ques_7

// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a);
// console.log(b);

//ques_12

// let obj = {"concept":""};


// console.log(
//   JSON.parse(
//     JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12)
//   ).concept
// );

//ques_5
// let arr = [1, 2, 3];
// (function () {
//   for (x in arr) arr.unshift(arr.pop());
//   console.log(arr);
// })();

// let randomAdder = function (arr = ["a", "b"]) {
//   arr[arr.length * arr.length] = arr.length * arr.length;
// };

// randomAdder(arr);
// randomAdder();

// console.log(arr[9]);
// console.log(arr[8]);

//ques_3

// let a =[
//     { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
//     { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
// ];
// let ans=[];
// let sum = 0;
// for(let i=0;i<a.length;i++){
//     let x = a[i].name;
//     let rainfall = a[i].rainfall;
//     for(let j=0;j<rainfall.length;j++){
//         sum += rainfall[j]; 
//     }
//     let avgRainfall = sum/rainfall.length;
//     ans.push("name: "+ x + " , " + "avgRainfall: " + avgRainfall);
// }
// console.log(ans);

//ques_8

// function decimalToBinary(n){
 
//         let p=1;
//         let num=0;
//         while(n!=0){
//             let ans=n%2;
//             n=n/2;
//             num +=ans*p;
//             p*=p;
//         }
//     console.log(num);
// }


//  decimalToBinary(10);

// function f() {
//     console.log(arguments);
//   }
  
//   function f(a, b) {
//     return a + b;
//   }
  
//   console.log(f(2, 3, 4, 5));
  
//   function f(x, y, z, t) {
//       return x + y + z + t;
//   }
  
//   console.log(f(2, 3, 4, 5));

let a;

console.log(a);

function A() {
  let a = 2;
  console.log(a);

  function C() {
    console.log(a);

    function D() {
      console.log(a);

      a = 2;
    }
    D();
    a = 3;
  }
  C();
}

function B() {
  let a;
  console.log(a);
  
  function E() {
    a = 6;
    console.log(a);
    
  }
  
  a = 2;
  E();
  console.log(a);
}

function F() {
  console.log(a);
  a = 2;
}

a = 3;

F();
B();
A();

