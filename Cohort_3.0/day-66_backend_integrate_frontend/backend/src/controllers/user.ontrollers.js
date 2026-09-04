const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userRegisterContoller = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(email, password, name);

  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All filed is required",
        success: false,
      });
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "user already exists ",
        success: false,
      });
    }

    const user = await UserModel.create({
      name: name,
      email: email,
      password: password,
    });

    if (!user) {
      return res.status(400).json({
        message: "user not created",
        success: false,
      });
    }

    await user.save();

    const jwtToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    res.cookie("Token", jwtToken, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60,
    });

    res.status(201).json({
      message: "user created  Successful",
      success: true,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "user resgister failed",
      success: false,
    });
  }
};

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All filed is required",
      success: false,
    });
  }

  try {

    const user = await UserModel.findOne({ email });
    console.log(user)

    if (!user) {
      return res.status(400).json({
        message: "invalid email or password",
        success: false,
      });
    }


    const passwordValid = await bcrypt.compare(password , user.password)
    
    if(!passwordValid){
        return res.status(400).json({
        message: "invalid email or password",
        success: false,
      });
    }

    console.log(user)

    res.status(200).json({
        message:"userlogin successfully",
        success:true,
         user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })

  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Login failed",
      success: false,
    });
  }
};



const getAllUser = async(req,res)=>{

   let allUser =await UserModel.find()
   console.log(allUser)

   res.status(200).json({
    message:"all user data",
    success:true,
    users:allUser
   })
}



module.exports = {
  userRegisterContoller,
  userLoginController,
  getAllUser
};
