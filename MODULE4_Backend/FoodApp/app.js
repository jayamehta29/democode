// const express = require("express");
// const app = express();

// let user = {
//     // "name": "jaya"
// };

// //CRUD APPLICATION
// app.get("/", function (req, res) {
//     res.send("WELCOME TO HOME PAGE OF FOOD APP");
// });

// app.post("/users", function (req, res) {
//     user = req.body;
//     res.send("post implemented");
// });


// app.get("/users", function (req, res) {
//     res.send("Profile page");
//     res.json(user);
// });

// app.patch("/users",function(req,res){
//     let obj = req.body;
//     for(let key in obj){
//         user[key] = obj[key];
//     }
//     res.send(user);
// })

// app.delete("/users",function(req,res){
//     user={};
// })

// app.listen(8080, function () {
//     console.log("server started at port:8080");
// })


// npm init -y
// npm i express
// npm i nodemon -g 
const express = require("express");
// Server: // route  -> request -> response/file 
// File system// path -> interact/type -> file /folder
// server init
const app = express();
const cookieParser = require("cookie-parser");
// post accept -> folder designate  
app.use(express.static('public'))
app.use(express.json());
app.use(cookieParser());
// function -> route  path\
// frontend -> req -> /
// getting data from server
// giving data to server
// crud app 
// create
// .form fill
const authRouter = require("./Routers/authRouter");
const userRouter = require("./Routers/userRouter");
// /api/user/:id
app.use('/api/user', userRouter);
app.use("/api/auth", authRouter);

// create , updatePlan ,deletePlan getAllPlans
// ****************************************************
// mounting in express 


// app.post("/api/user", getUser);
// // get
// app.get("/api/user", createUser);
// //update
// app.patch("/api/user", updateUser);
// //delete
// app.delete("/api/user", deletUser);
//template routes 
// app.get("api/user/:id", getUserById);

//localhost:8080 ??
app.listen(8080, function () {
    console.log("server started at http://localhost:8080");
})
// / port, ip,localhost