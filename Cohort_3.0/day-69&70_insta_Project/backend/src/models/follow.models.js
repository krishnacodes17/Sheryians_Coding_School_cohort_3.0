const mongoose = require("mongoose")


const followSchema = new mongoose.Schema({
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"followers is required "]
    },
    follwee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"followee is required"]
    },
    status:{
        type:String,
        default:"pending",
        enum:{
            values:["pending","accepted","rejected"],
            message:"Status can be only pending, accepted, rejected"
        }
    }
},{
    timestamps:true
})

followSchema.index({follower:1,follwee:1},{unique:true})


const followModel  = mongoose.model("follows",followSchema)
module.exports = followModel