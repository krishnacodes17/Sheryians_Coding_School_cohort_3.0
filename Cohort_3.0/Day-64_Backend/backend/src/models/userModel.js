const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    about : {
        required:true   ,
        type:String,

    }
})



const userModel = mongoose.model("User",userSchema)

module.exports = userModel