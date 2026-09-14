const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3,"name must be 3 characters length"],
        maxLength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
         match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password:{
        type :String,
        required:true
    },
    refreshToken:{
        type:String
    }


})


const userModel = mongoose.model("User",userSchema)

module.exports = userModel