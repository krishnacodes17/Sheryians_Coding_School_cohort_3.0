const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    
    try {
        const token = req.cookies.token;
    // console.log(token)

    if(!token){
        return res.status(401).json({
            message:"invalid token please login ",
            success:false
        })
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET)

    if(!decode){
        return res.status(401).json({
            message:"Invalid user ",
            success:false
        })
    }

    // console.log(decode)
    req.userId = decode.id;
    req.userEmail = decode.email

    next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "Invalid or expired token", success: false });
    }

}



module.exports = authMiddleware