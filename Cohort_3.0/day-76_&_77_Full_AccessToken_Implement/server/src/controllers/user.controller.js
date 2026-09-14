const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { createRefreshToken, createAccessToken } = require("../utils/token");

/**
 *  Register a new user
 * @route   POST /api/v1/auth/register
 * @access  Public
 * @param {object} req name , email ,password
 * @param {object} res user details
 * @returns   Created user with access token
 */

const userRegisterController = async (req, res) => {
  let { name, email, password } = req.body;
  console.log(name  , email, password)

  // Normalize
  name = name?.trim();
  email = email?.trim().toLowerCase();

  // ? check all fieled

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All field is required",
    });
  }

  //  check user exist or not
  try {
    const isUserExists = await userModel.findOne({ email });

    if (isUserExists) {
      return res.status(400).json({
        message: "user already exists",
        success: false,
      });
    }

    const user = await userModel.create({
      name,
      email,
      password: await bcrypt.hash(password, 12),
    });

    //  create Token
    const refreshToken = await createRefreshToken(user._id);

    const accessToken = await createAccessToken(user._id);

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    
    res.status(201).json({
      message: "User crated successfully",
      user: {
        name,
        email,
        accessToken,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

/**
 *  Register a new user
 * @route   POST /api/v1/auth/login
 * @access  Public
 * @param {object} req  email ,password
 * @param {object} res user details
 * @returns   login user and create access token and refresh token
 */

const userLoginController = async (req, res) => {
  let { email, password } = req.body;

  console.log(email , password)

  email = email?.trim().toLowerCase();

  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const isUserExist = await userModel.findOne({ email });

    if (!isUserExist) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      isUserExist.password,
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Invalid user or Password ",
      });
    }

    const accessToken = createAccessToken(isUserExist._id);
    const refreshToken = createRefreshToken(isUserExist._id);

    isUserExist.refreshToken = refreshToken;
    await isUserExist.save();

    res.status(200).json({
      message: "User login successFully ",
      success: true,
      accessToken,
      user: {
        name: isUserExist.name,
        email: isUserExist.email,
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
  userRegisterController,
  userLoginController,
};
