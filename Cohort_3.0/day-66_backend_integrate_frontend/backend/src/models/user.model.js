const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true , "name is required"]
    },
    email:{
        type:String,
        required:[true , "email is required"],
        unique:true
    },
    password:{
        type:String,
        require:[true , "password is required"]
    }
},{timestamps:true})


userSchema.pre("save",async function(){
    if(this.isModified("password")){
        this.password =await bcrypt.hash(this.password , 10)
    }
})


const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel