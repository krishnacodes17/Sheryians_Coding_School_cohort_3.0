const userModel = require("../models/user.model");
const {
  verifyRefreshToken,
  createAccessToken,
  createRefreshToken,
} = require("../utils/token");

const userRefreshController = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token required",
      });
    }

    const decode = verifyRefreshToken(refreshToken);

    const user = await userModel.findById(decode.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // ? if refreshToken invalid
    if (user.refreshToken !== refreshToken) {
      user.refreshToken = undefined;
      await user.save();

      return res.status(401).json({
        success: false,
        message: "Invalid refresh token",
      });
    }

    // Create Token
    const accessToken = createAccessToken(user._id);
    return res.status(200).json({
      success: true,
      accessToken,
    });
    
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired refresh token",
    });
  }
};

module.exports = userRefreshController;
