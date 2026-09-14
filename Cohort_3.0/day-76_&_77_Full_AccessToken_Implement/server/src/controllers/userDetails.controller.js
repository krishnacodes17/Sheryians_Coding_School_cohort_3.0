const userModel = require("../models/user.model");

const userDetailsController = async (req, res) => {
  const { userId } = req;

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(401).json({
        message: "User details not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "USer details fetch successfully",
      success: true,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  userDetailsController,
};
