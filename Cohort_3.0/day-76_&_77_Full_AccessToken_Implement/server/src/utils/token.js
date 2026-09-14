const jwt = require("jsonwebtoken")


const createRefreshToken = (id)=>{
    const token = jwt.sign({id}, process.env.REFRESH_TOKEN,{expiresIn:"7d"})
    return token
}


const createAccessToken = (id)=>{
    const token = jwt.sign({id},process.env.ACCESS_TOKEN,{expiresIn:"15m"})
    return token
}



const verifyAccessToken = (token)=>{
    const accessToken = jwt.verify(token, process.env.ACCESS_TOKEN)
    return accessToken
}

const verifyRefreshToken = (token)=>{
    const refreshToken = jwt.verify(token , process.env.REFRESH_TOKEN)
    return refreshToken
}



module.exports = {
    createRefreshToken,
    createAccessToken,
    verifyAccessToken,
    verifyRefreshToken
}