const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const {generateToken, verifyAccessToken, verifyRefreshToken, verifiAccessToken} = require("../utils/auth")

/**
 * @post /api/v1/auth/register
 */
const userRegisterController = async(req,res)=>{
    const {name, email, password} = req.body

    console.log(name, email,password)

    //  ? validate user 
    if(!name || !password || !email){
        return res.status(400).json({
            message :"All field is required",
            success:false
        })
    }

    // ? check user already exists
    const isUserExists = await userModel.findOne({email})
    console.log(isUserExists)

    if(isUserExists){
        return res.status(400).json({
            message:"User already exists",
            success:false
        })
    }


    // ? creating new email 

    const user = await userModel.create({
        name,
        email,
        password: await bcrypt.hash(password,12)
    })


    //  generate token 
    

    const {accessToken,refreshToken} = generateToken({userId:user._id})

    // save token into DB
    user.refreshToken = refreshToken
    await user.save()



    res.cookie("refreshToken", refreshToken,{
        httpOnly:true   // client side pe cookie ko koi access naa kar paaye 

    })

    res.status(201).json({
        message:"User register Successfully",
        success:true,
        user:{
            name,
            email
        },
        accessToken
    })


}



//  ? userGetMe
const userMeController = async(req,res)=>{
    const accessToken = req.headers.authorization?.split(" ")[1]

    console.log(accessToken ,"dsgfsgfdg")
    try {
        const decode = verifiAccessToken(accessToken)
        console.log(decode,"ye decode hai")

        const user = await userModel.findById(decode.userId)
        console.log("user by accessToken", user)

        res.status(200).json({
            message:"user fetch successfully",
            data:{
                user:{
                    name:user.name,
                    email:user.email
                }
            }
        })

    } catch (error) {
            console.log(error)
        return res.status(401).json({
            message:"Unautorized , Invalid or expire access Token"
        })
    }

}




//  ? refresh token 
const userRefreshController = async(req,res)=>{
    const refreshToken =  req.cookies.refreshToken
    
    console.log("refres token", refreshToken)

    if(!refreshToken){
        return res.status(401).json({
            message:"Unauthorized user , refres token not found"
        })
    }

    try {
    const isRefreshTokenValid = verifyRefreshToken(refreshToken)

    const user = await userModel.findById(isRefreshTokenValid.id)

    if(refreshToken !== user.refreshToken){
        user.refreshToken= null
        await user.save()

        return res.status(401).json({
            message:"Unauthorized user , refres token mismatch"
        })
    }


    const {accessToken,refreshToken:newRefreshToken} = generateToken({userId:user._id})

    res.cookie("refreshToken", newRefreshToken)

    user.refreshToken = newRefreshToken,
    await user.save()

    res.status(200).json({
        message:"token refresh successfully",
        accessToken
    })

        
    } catch (error) {
        return res.status(401).json({
            message:"Unauthorized or expire refresh token "
        })
    }


}





/**
 * @post /api/v1/auth/login
 */
const userLoginController = async(req,res)=>{
    const {email,password} = req.body

    console.log(email, password)

    // check user exist or not 

    const isUserExist = await userModel.findOne({email})

    if(!isUserExist){
        return res.status(400).json({
            message:"User not exist ",
            success:false
        })
    }


    //  check password is valid 
    const passwordvalid = await bcrypt.compare(password,isUserExist.password)

    if(!passwordvalid){
        return res.status(400).json({
            message:"Invalid user or password ",
            success:false
        })
    }







}




module.exports = {
    userRegisterController,
    userLoginController,
    userMeController,
    userMeController,
    userRefreshController
}