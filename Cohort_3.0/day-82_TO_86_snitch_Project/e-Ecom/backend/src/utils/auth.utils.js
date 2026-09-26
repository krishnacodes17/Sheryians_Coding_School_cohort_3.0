const jwt = require("jsonwebtoken")


const createRefreshToken = ({userId,role})=>{
    const token = jwt.sign({userId, role}, process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:"7d"
    })
    return token
}


const createAccessToken = ({userId,role})=>{
    const token = jwt.sign({userId, role}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"15m"
    })
    return token
}

const verifyAccessToken = (token)=>{
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    return payload
}

const verifyRefreshToken = (token)=>{
    const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
    return payload
}



module.exports = {
    createAccessToken,
    createRefreshToken,
    verifyAccessToken,
    verifyRefreshToken
}