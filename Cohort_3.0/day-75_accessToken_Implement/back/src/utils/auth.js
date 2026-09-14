const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

 const generateToken = ({userId})=>{
    const accessToken = jwt.sign({userId} , process.env.ACCESS_TOKEN, {expiresIn:"15m"})

    const refreshToken = jwt.sign({id:userId} , process.env.REFRESH_TOKEN, {expiresIn:"7d"})


    return{
        accessToken,
        refreshToken
    }
}


 function verifiAccessToken(token){
    const decode = jwt.verify(token, process.env.ACCESS_TOKEN)
    return decode
}


function verifyRefreshToken(token){
    const decode  = jwt.verify(token,process.env.REFRESH_TOKEN)
    return decode
}


module.exports = {
    generateToken,
    verifiAccessToken,
    verifyRefreshToken
};