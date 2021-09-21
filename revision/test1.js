// *****************QUES 3***********************



// let arr = [
//     { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
//     { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
// ];

// // console.log(arr.rainfall);

// for (let x in arr) {
//     let rainArr = arr[x].rainfall;
//     let avgRainfall = getAvgRainfall(rainArr);
//     // console.log(avgRainfall);
//     display(arr[x],avgRainfall);
// }

// function getAvgRainfall(rain){
//     let x=0;
//     for(let i=0;i<rain.length;i++){
//         x+=rain[i];
//     }
//     return x/rain.length;
// }

// function display(arr,avg){
//     let ansObj = {name:arr.name};
//     ansObj.avgRainfall = avg;
//     console.log(ansObj);
// }



// QUES 4

// let input = {
//     flavor: "vanilla",
//     topping: {
//         drizzle: "chocolava",
//         sprinkle: "choco-chips",
//     },
//     cone: {
//         type: "waffle",
//         crust: {
//             color: "dark",
//             texture: "soft",
//         },
//     },
// };


// for(let x in input){
//     input.hasOwnProperty(x);
// }

// let arr = [1, 2, 3];
// (function () {
//     for (x in arr) {
//         arr.unshift(arr.pop());
//     }
//     console.log(arr);
// })();

// let randomAdder = function (arr = ["a", "b"]) {
//     arr[arr.length * arr.length] = arr.length * arr.length;
// };

// randomAdder(arr);
// randomAdder();

// console.log(arr[9]);
// console.log(arr[8]);

// ques 8
// let final=[];
// function decimalToBinary(num) {
//     let p = 1;

//     let ans = 0;
//     while(num!=0){
//         let dig = num % 2;
//         final.push(dig);
//         num = num / 2;
//         // ans = dig*Math.pow(10,p);
//         // p++;
//     }
//     // final.push(ans);
//     console.log(final.reverse());
// }

// decimalToBinary(2);


// ques 9

// function spoon(str){
//     let arr = str.split(" "); 
//     let f = arr[0][0];
//     let s = arr[1][0];
//     let ans = s+arr[0].slice(1) + " " + f+arr[1].slice(1);
//     console.log(ans);
// }

// spoon("jaya mehta");


// QUES 10

// function f() {
//     console.log(arguments);
// }

// function f(a, b) {
//     return a + b;
// }

// console.log(f(2, 3, 4, 5));

// function f(x, y, z, t) {
//     return x + y + z + t;
// }

// console.log(f(2, 3, 4, 5));



// ques 11
// console.log(a);
// f(2, 3, 4, 5);

// var a = 1;
// var a = 2;
// console.log(a);
// console.log(b);
// let b = 2;

// function f() {
//   console.log(arguments);
// }



// ques 12
// let obj = {"concept":""};


// console.log(
//   JSON.parse(
//     JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12)
//   ).concept
// );

// ques 13

// let a;

// console.log(a);//undefined

// function A() {
//   let a = 2;
//   console.log(a);//2

//   function C() {
//     console.log(a);//2

//     function D() {
//       console.log(a);//2

//       a = 2;
//     }
//     D();
//     a = 3;
//   }
//   C();
// }

// function B() {
//   let a;
//   console.log(a);//undefined

//   function E() {
//     a = 6;
//     console.log(a);

//   }

//   a = 2;
//   E();//6
//   console.log(a);//6
// }

// function F() {
//   console.log(a);//3
//   a = 2;
// }

// a = 3;

// F();//3
// B(); //undefined 6 2
// A(); //undefined 2 2 3

//ques 14
let users = [
    {
        name: "Rajneesh",
        age: 34,
        address: {
            local: "22 Alaknanda",
            city: "Dehradun",
            state: "UK",
        },
        orders: [{ id: 1, name: "GOT Book Series" }],
    },
    {
        name: "Bhavesh",
        age: 37,
        address: {
            local: "48 DT Row",
            city: "Hyderabad",
            state: "AP",
        },
    },
    {
        name: "Jasbir",
        age: 38,
        address: {
            local: "196 Lama Bhavan",
            city: "Gangtok",
            state: "Sikkim",
        },
        orders: [
            { id: 1, name: "Chair" },
            { id: 2, name: "PS5" },
        ],
    },
];

function updateUsers(users, userObject, item) {
    //write your code here
    
}

console.log(
    JSON.stringify(
        updateUsers(
            users,
            {
                name: "Rajneesh",
                age: 34,
                address: {
                    local: "22 Alaknanda",
                    city: "Dehradun",
                    state: "UK",
                },
            },
            "GOT Book Series"
        )
    )
);

console.log(
    JSON.stringify(
        updateUsers(users, {
            name: "Ravi",
            age: 24,
            address: {
                local: "25 Iroda",
                city: "Dehradun",
                state: "UK",
            },
        })
    )
);

console.log(
    JSON.stringify(
        updateUsers(
            users,
            {
                name: "Ravi",
                age: 24,
                address: {
                    local: "25 Iroda",
                    city: "Dehradun",
                    state: "UK",
                },
            },
            "Chair"
        )
    )
);

console.log(
    JSON.stringify(
        updateUsers(
            users,
            {
                name: "Rajneesh",
                age: 34,
                address: {
                    local: "22 Alaknanda",
                    city: "Dehradun",
                    state: "UK",
                },
            },
            "Fan"
        )
    )
);


//   Test Cases:

//   Input (already part of code):
console.log(
    JSON.stringify(
        updateUsers(
            users,
            {
                name: "Rajneesh",
                age: 34,
                address: {
                    local: "22 Alaknanda",
                    city: "Dehradun",
                    state: "UK",
                },
            },
            "GOT Book Series"
        )
    )
);

console.log(
    JSON.stringify(
        updateUsers(users, {
            name: "Ravi",
            age: 24,
            address: {
                local: "25 Iroda",
                city: "Dehradun",
                state: "UK",
            },
        })
    )
);

console.log(
    JSON.stringify(
        updateUsers(
            users,
            {
                name: "Ravi",
                age: 24,
                address: {
                    local: "25 Iroda",
                    city: "Dehradun",
                    state: "UK",
                },
            },
            "Chair"
        )
    )
);

console.log(
    JSON.stringify(
        updateUsers(
            users,
            {
                name: "Rajneesh",
                age: 34,
                address: {
                    local: "22 Alaknanda",
                    city: "Dehradun",
                    state: "UK",
                },
            },
            "Fan"
        )
    )
)








