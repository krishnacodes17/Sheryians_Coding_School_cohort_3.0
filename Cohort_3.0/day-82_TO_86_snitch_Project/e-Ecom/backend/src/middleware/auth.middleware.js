const { verifyAccessToken } = require("../utils/auth.utils")

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Access token required",
            success: false
        })
    }

    const token = authHeader.split(" ")[1]

    try {
        const payload = verifyAccessToken(token)
        req.user = payload
        next()
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired access token",
            success: false
        })
    }
}

module.exports = authMiddleware