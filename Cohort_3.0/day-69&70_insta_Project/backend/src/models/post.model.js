const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,"img url is required"]
    },
    user:{
        ref:"User",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"user id is required for createing post "]
    }
})



const postModel = mongoose.model("posts",postSchema)
module.exports = postModel