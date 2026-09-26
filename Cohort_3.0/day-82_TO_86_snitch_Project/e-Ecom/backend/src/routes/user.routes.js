const express = require("express")
const { userRegisterController, userLoginController, userRefreshTokenController, userGetMeController } = require("../controllers/user.controller")
const { registerVAlidator, loginValidator } = require("../validator/auth.validator")
const authMiddleware = require("../middleware/auth.middleware")

const userRoute = express.Router()

userRoute.post("/register",registerVAlidator,userRegisterController)
userRoute.post("/login",loginValidator,userLoginController)

userRoute.get("/refresh",userRefreshTokenController)
userRoute.get("/getMe",authMiddleware,userGetMeController)


module.exports = userRoute