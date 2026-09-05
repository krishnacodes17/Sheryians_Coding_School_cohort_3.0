const followModel = require("../models/follow.models")
const userModel = require("../models/user.model")




const followUserController = async(req,res)=>{

    const followerUserId= req.userId
    const followeeUserId = req.params.userid



    if(followerUserId == followeeUserId){
        return res.status(400).json({
            message:"you can't follow yourself",
            success:false
        })
    }

    const isFolloweeExist = await userModel.findById(followeeUserId)

    if(!isFolloweeExist){
        return res.status(404).json({
            message:"User you are try to  follow does not exists"
        })
    }


    const isAlreadyFollowing = await followModel.findOne({
        follower:followerUserId,
        follwee:followeeUserId
    })

    if(isAlreadyFollowing){
        return res.status(200).json({
            message:"you already follow "
        })
    }
    

    followRecord = await followModel.create({
        follower:followerUserId,
        follwee:followeeUserId,
        status:"pending"
    })


    res.status(201).json({
        message : "following done",
        success:true
    })

}


module.exports ={
    followUserController
}