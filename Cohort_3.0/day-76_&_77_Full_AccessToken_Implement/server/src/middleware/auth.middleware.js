const jwt = require("jsonwebtoken");
const { verifyAccessToken } = require("../utils/token");
const userDetailsRouter = require("../routes/userDetails.routes");

const authMiddleware = async (req, res, next) => {
    
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access token is required",
      });
    }

    const accessToken = authHeader.split(" ")[1];
    // console.log(accessToken)

    const decode = verifyAccessToken(accessToken)

    req.userId = decode.id 
    next()

  } catch (error) {
    console.log(error)
    return res.status(401).json({
      success: false,
      message: "Access token is invalid or expired",
    });
  }
};


module.exports = authMiddleware