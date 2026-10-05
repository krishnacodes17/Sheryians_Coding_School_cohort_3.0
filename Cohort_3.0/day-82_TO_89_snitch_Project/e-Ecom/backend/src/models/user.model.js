const { default: mongoose } = require("mongoose");


const userSchema =  new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    passwordHash:{
        type:String,
        required:[true,"Password is required "]
    },
    role:{
        type:String,
        default:"user",
        enum:["user","seller"]
    },
    refreshToken:{
        type:String,
    }

})


const userModel = mongoose.model("User", userSchema)
module.exports = userModel