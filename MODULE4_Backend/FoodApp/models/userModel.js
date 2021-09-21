const mongoose = require("mongoose");
const emailValidator = require("email-validator")
let { DB_LINK } = require("../secret");
// link
// connnection form 
mongoose.connect(DB_LINK,{useNewUrlParser: true,
    
    useUnifiedTopology: true,}).then(function (db) {
    // console.log(db);
    console.log("connected to db")
}).catch(function (err) {
    console.log("err", err);
})
// syntax 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function () {
            return emailValidator.validate(this.email);
        }
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        minlength: 7,
        required: true
    },
    confirmPassword: {
        type: String,
        minlength: 7,
        validate:
            function () {
                return this.password == this.confirmPassword
            },
        required: true
    },
    createdAt: {
        type: Date
    }
})
// order matters 
userSchema.pre("save", function () {
    // db confirm password will not be saved
    console.log("Hello");
    this.confirmPassword = undefined;
})
const userModel = mongoose.model("userModel", userSchema);


module.exports = userModel