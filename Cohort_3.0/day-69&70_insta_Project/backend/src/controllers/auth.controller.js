const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");



const userRegisterController = async(req,res)=>{
    const {username,email,password,bio,profileImage} = req.body

    console.log(username,email,password,bio)


    if(!username || !email || !password){
        return res.status(401).json({
            message:"all fieled is required ",
            success:false
        })
    }

    const isUserExists = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserExists){
        return res.status(409).json({
            message:"User already exists  " + (isUserExists.email ==email ? "email already exists" : "username already exists"),
            success:false
        })
    }


    const user = await userModel.create({
        username,
        email,
        password,
        bio,
        profileImage
    })
    
    const token = jwt.sign({
        id:user._id , email:user.email
    },process.env.JWT_SECRET,{expiresIn:"24h"})

    res.cookie("token",token)


    res.status(201).json({
        message:"User created successfully",
        success:true,
        user:{
            username:user.username,
            email:user.email,
            
        }
    })
}



const userLoginController = async(req,res)=>{
    const {username,email,password} = req.body
    console.log(username , email, password)

    if(!username || !email || !password){
        return res.status(401).json({
            message:"all fieled is required ",
            success:false
        })
    }

    const user =await userModel.findOne({
        $or:[ { username: username }, { email: email } ]
    }).select("+password")

    if(!user){
        return res.status(401).json({
            message:"user not exist ",
            success:false
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message:"invalid email or password ",
            success:false
        })
    }

    const token = jwt.sign({
        id:user._id, email:user.email
    },process.env.JWT_SECRET,{expiresIn:"24h"})

    res.cookie("token",token)

     res.status(201).json({
        message:"User login successfully",
        success:true,
        user:{
            username:user.username,
            email:user.email,
            id:user._id
            
        }
    })


}

const currentUserLoginController = async(req,res)=>{
    const token  = req.cookies.token 

    console.log("/me " , token)

    if(!token){
        return res.status(401).json({
            message:"Invalid token Please login ",
            success:false
        })
    }


    const decode = jwt.verify(token, process.env.JWT_SECRET)


    // ? find user 
    const user = await userModel.findById(decode.id)
    console.log(user)

    if(!user){
        return res.status(404).json({
            message:"User not found",
            success:false
        })
    }

    res.status(200).json({
        message:"User details find successFully",
        success:true,
        user
    })

}





module.exports = {userRegisterController,
    userLoginController,
    userRegisterController,
    currentUserLoginController
}