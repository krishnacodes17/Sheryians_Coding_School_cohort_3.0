const userModel = require("../models/user.model");
const {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} = require("../utils/auth.utils");
const {
  HasedPassWordGenerate,
  isPasswordCorrect,
} = require("../utils/password");

const userRegisterController = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(name, email, password)

  try {
    let isUser = await userModel.findOne({ email });

    if (isUser) {
      return res.status(400).json({
        message: "User already exists ",
        success: false,
      });
    }

    const hashedPassword = await HasedPassWordGenerate(password);

    let user = await userModel.create({
      email,
      name,
      passwordHash: hashedPassword,
    });

    const accessToken = await createAccessToken({
      userId: user._id,
      role: user.role,
    });

    const refreshToken = await createRefreshToken({
      userId: user._id,
      role: user.role,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      message: "User register successfully",
      success: true,
      data: {
        user: {
          email: user.email,
          name: await user.name,
          id: await user._id,
        },
      },
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isUserExist = await userModel.findOne({ email });

    if (!isUserExist) {
      return res.status(400).json({
        message: "User not exists ",
        success: false,
      });
    }

    const isPassword = await isPasswordCorrect(
      password,
      isUserExist.passwordHash,
    );

    if (!isPassword) {
      return res.status(400).json({
        message: "Invalid email or password ",
        success: false,
      });
    }

    const accessToken = await createAccessToken({
      userId: isUserExist._id,
      role: isUserExist.role,
    });

    const refreshToken = await createRefreshToken({
      userId: isUserExist._id,
      role: isUserExist.role,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    isUserExist.refreshToken = refreshToken;

    await isUserExist.save();

    res.status(200).json({
      message: "User Login successfully",
      success: true,
      data: {
        user: {
          email: isUserExist.email,
          name: isUserExist.name,
          id: isUserExist._id,
        },
      },
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.send(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const userRefreshTokenController = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "refresh token is required",
        success: false,
      });
    }

    const isRefreshTokenValid = await verifyRefreshToken(refreshToken);
    const { userId, role } = isRefreshTokenValid;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    if (refreshToken !== user.refreshToken) {
      await userModel.findByIdAndUpdate(user._id, {
        refreshToken: null,
      });
      return res.status(401).json({
        message: "Refresh token mismatch",
        success: false,
      });
    }

    const accessToken = await createAccessToken({ userId, role });
    const newRefreshToken = await createRefreshToken({ userId, role });

    user.refreshToken = newRefreshToken;
    await user.save();

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    });

    res.status(200).json({
      message: "refresh token created successfully",
      success: true,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      message: "Invalid or expired refresh token",
      success: false,
    });
  }
};

const userGetMeController = async (req, res) => {
  // console.log(req.user)

  try {
    const { userId, role } = req.user;

    const user = await userModel.findById(userId);

    res.status(200).json({
      message: "User Login successfully",
      success: true,
      data: {
        user: {
          email: user.email,
          name: user.name,
          id: user._id,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error ",
      success: false,
    });
  }
};

module.exports = {
  userRegisterController,    
  userLoginController,
  userRefreshTokenController,
  userGetMeController,
};
