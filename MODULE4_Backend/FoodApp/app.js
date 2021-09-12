const express = require("express");
const app = express();

let user = {
    // "name": "jaya"
};

//CRUD APPLICATION
app.get("/", function (req, res) {
    res.send("WELCOME TO HOME PAGE OF FOOD APP");
});

app.post("/users", function (req, res) {
    user = req.body;
    res.send("post implemented");
});


app.get("/users", function (req, res) {
    res.send("Profile page");
    res.json(user);
});

app.patch("/users",function(req,res){
    let obj = req.body;
    for(let key in obj){
        user[key] = obj[key];
    }
    res.send(user);
})

app.delete("/users",function(req,res){
    user={};
})

app.listen(8080, function () {
    console.log("server started at port:8080");
})